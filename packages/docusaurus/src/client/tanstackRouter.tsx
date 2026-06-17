/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useCallback, useMemo, type ReactNode} from 'react';
import {
  Link as TanStackLink,
  RouterProvider,
  createHashHistory,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  useRouter,
  useRouterState,
} from '@tanstack/react-router';
import type {Location} from './routeMatching';

export {matchPath} from './routeMatching';

type NavigationTarget = string | Partial<Location>;
type NavigationBlocker = (
  location: Location,
  action: 'POP' | 'PUSH' | 'REPLACE',
) => void | false;

type RouterProps = {
  readonly children: ReactNode;
  readonly type?: 'browser' | 'hash' | 'memory';
  readonly location?: string;
};

function normalizeSearch(search: unknown): string {
  if (typeof search !== 'string' || search.length === 0) {
    return '';
  }
  return search.startsWith('?') ? search : `?${search}`;
}

function normalizeHash(hash: unknown): string {
  if (typeof hash !== 'string' || hash.length === 0) {
    return '';
  }
  return hash.startsWith('#') ? hash : `#${hash}`;
}

function toLocation(location: {
  pathname: string;
  searchStr?: string;
  search?: unknown;
  hash?: string;
  state?: unknown;
}): Location {
  return {
    pathname: location.pathname,
    search: normalizeSearch(location.searchStr),
    hash: normalizeHash(location.hash),
    state: location.state,
  };
}

function stringifyTarget(to: NavigationTarget): string {
  if (typeof to === 'string') {
    return to;
  }

  const search = normalizeSearch(to.search);
  const hash = normalizeHash(to.hash);
  return `${to.pathname ?? ''}${search}${hash}` || '.';
}

export function Router({children, type = 'browser', location}: RouterProps) {
  const router = useMemo(() => {
    const rootRoute = createRootRoute({
      component: () => <>{children}</>,
      notFoundComponent: () => <>{children}</>,
    });
    const indexRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: '/',
      component: () => <>{children}</>,
    });
    const splatRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: '$',
      component: () => <>{children}</>,
    });

    const history =
      type === 'hash'
        ? createHashHistory()
        : type === 'memory'
          ? createMemoryHistory({initialEntries: [location ?? '/']})
          : undefined;

    return createRouter({
      routeTree: rootRoute.addChildren([indexRoute, splatRoute]),
      history,
      defaultPreload: false,
      scrollRestoration: false,
    });
  }, [children, location, type]);

  return <RouterProvider router={router} />;
}

export function useLocation(): Location {
  return useRouterState({select: (state) => toLocation(state.location)});
}

export function useHistory() {
  const router = useRouter();
  const location = useLocation();

  return useMemo(
    () => ({
      location,
      push: (to: NavigationTarget) => router.navigate({to: stringifyTarget(to)}),
      replace: (to: NavigationTarget) =>
        router.navigate({to: stringifyTarget(to), replace: true}),
      listen: (listener: () => void) =>
        router.subscribe('onResolved', () => {
          listener();
        }),
      block: (_listener?: NavigationBlocker) => () => {},
      createHref: (to: NavigationTarget) => stringifyTarget(to),
    }),
    [location, router],
  );
}

export function Redirect({to}: {to: string}): null {
  const router = useRouter();
  React.useEffect(() => {
    router.navigate({to, replace: true});
  }, [router, to]);
  return null;
}

export function Link({innerRef, ...props}: any): ReactNode {
  return <TanStackLink ref={innerRef} {...props} />;
}

export function NavLink({activeClassName, isActive, className, ...props}: any) {
  const location = useLocation();
  const isCurrentlyActive = isActive
    ? isActive(undefined, location)
    : props.to === location.pathname;
  const getClassName = useCallback(
    () =>
      [typeof className === 'function' ? className() : className, isCurrentlyActive && activeClassName]
        .filter(Boolean)
        .join(' ') || undefined,
    [activeClassName, className, isCurrentlyActive],
  );

  return <Link {...props} className={getClassName()} />;
}
