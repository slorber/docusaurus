/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import pathToRegexpModule from 'path-to-regexp';
import type React from 'react';

type PathToRegexpKey = {name: string};
type PathToRegexp = (
  path: string,
  keys: PathToRegexpKey[],
  options: {end: boolean; strict: boolean; sensitive: boolean},
) => RegExp;

const pathToRegexp = pathToRegexpModule as unknown as PathToRegexp;

export type RouteConfig = {
  path?: string | string[];
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.ComponentType<any> & {preload?: () => void | Promise<void>};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (props: any) => React.ReactNode;
  routes?: RouteConfig[];
  key?: React.Key;
};

export type Match<Params extends {[key: string]: string | undefined} = {}> = {
  path: string;
  url: string;
  isExact: boolean;
  params: Params;
};

export type MatchedRoute<Route extends RouteConfig = RouteConfig> = {
  route: Route;
  match: Match;
};

const cache: Record<
  string,
  Record<string, {regexp: RegExp; keys: PathToRegexpKey[]}>
> = {};
const cacheLimit = 10000;
let cacheCount = 0;

function compilePath(
  path: string,
  options: {end: boolean; strict: boolean; sensitive: boolean},
) {
  const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
  const pathCache = cache[cacheKey] ?? (cache[cacheKey] = {});

  if (pathCache[path]) {
    return pathCache[path];
  }

  const keys: PathToRegexpKey[] = [];
  const regexp = pathToRegexp(path, keys, options);
  const result = {regexp, keys};

  if (cacheCount < cacheLimit) {
    pathCache[path] = result;
    cacheCount += 1;
  }

  return result;
}

export function matchPath<Params extends {[key: string]: string | undefined}>(
  pathname: string,
  options: string | string[] | RouteConfig = {},
): Match<Params> | null {
  const routeOptions =
    typeof options === 'string' || Array.isArray(options)
      ? {path: options}
      : options;
  const {path, exact = false, strict = false, sensitive = false} = routeOptions;

  const paths = ([] as string[]).concat(path ?? []).flatMap((currentPath) => {
    if (!strict && currentPath !== '/' && currentPath.endsWith('/')) {
      return [currentPath, currentPath.replace(/\/$/, '')];
    }
    return [currentPath];
  });

  for (const currentPath of paths) {
    if (currentPath === '*') {
      return {
        path: currentPath,
        url: pathname,
        isExact: true,
        params: {} as Params,
      };
    }

    const {regexp, keys} = compilePath(currentPath, {
      end: exact,
      strict,
      sensitive,
    });
    const match = regexp.exec(pathname);

    if (!match) {
      continue;
    }

    const [url, ...values] = match;
    const isExact = pathname === url;

    if (exact && !isExact) {
      continue;
    }

    return {
      path: currentPath,
      url: currentPath === '/' && url === '' ? '/' : url,
      isExact,
      params: keys.reduce((memo, key, index) => {
        memo[key.name as keyof Params] = values[index] as Params[keyof Params];
        return memo;
      }, {} as Params),
    };
  }

  return null;
}

function computeRootMatch(pathname: string): Match {
  return {path: '/', url: '/', params: {}, isExact: pathname === '/'};
}

export function matchRoutes<Route extends RouteConfig>(
  routes: Route[],
  pathname: string,
  branch: MatchedRoute<Route>[] = [],
): MatchedRoute<Route>[] {
  routes.some((route) => {
    const match = route.path
      ? matchPath(pathname, route)
      : branch.length > 0
        ? branch[branch.length - 1]!.match
        : computeRootMatch(pathname);

    if (match) {
      branch.push({route, match});

      if (route.routes) {
        matchRoutes(route.routes as Route[], pathname, branch);
      }
    }

    return match;
  });

  return branch;
}
