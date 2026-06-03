/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useMemo, type ReactNode} from 'react';
import {
  Navigate,
  useLocation,
  useNavigate,
  useNavigationType,
  type To,
  type Location,
} from 'react-router-dom';
import {matchPath} from '../../common/routerUtils';

export {useLocation};
export type {Location};
export {matchPath};

type HistoryUpdate = To | number;
type HistoryAction = 'POP' | 'PUSH' | 'REPLACE';
type HistoryListener = (location: ReturnType<typeof useLocation>) => void;
type HistoryBlocker = (
  location: ReturnType<typeof useLocation>,
  action: HistoryAction,
) => void | false;

export function useHistory() {
  const location = useLocation();
  const navigate = useNavigate();
  const action = useNavigationType() as HistoryAction;

  return useMemo(() => {
    const update = (to: HistoryUpdate, options?: {replace?: boolean}) => {
      if (typeof to === 'number') {
        navigate(to);
      } else {
        navigate(to, options);
      }
    };

    return {
      action,
      location,
      length: globalThis.window?.history.length ?? 0,
      push: (to: HistoryUpdate) => update(to),
      replace: (to: HistoryUpdate) => update(to, {replace: true}),
      go: (delta: number) => navigate(delta),
      goBack: () => navigate(-1),
      goForward: () => navigate(1),
      listen: (_listener: HistoryListener) => {
        // React Router v6+ no longer exposes the history singleton. Consumers
        // should prefer useLocation/useSyncExternalStore subscriptions that are
        // implemented by the router context itself.
        return () => {};
      },
      block: (_blocker: HistoryBlocker) => {
        // Navigation blocking is intentionally a no-op compatibility shim.
        // React Router v6+ removed the v5 history.block API; Docusaurus only
        // relies on this as a best-effort enhancement for pop navigation UI.
        return () => {};
      },
      createHref: (to: To) =>
        typeof to === 'string'
          ? to
          : `${to.pathname ?? ''}${to.search ?? ''}${to.hash ?? ''}`,
    };
  }, [action, location, navigate]);
}

export function Redirect({to, push}: {to: To; push?: boolean}): ReactNode {
  return <Navigate to={to} replace={!push} />;
}
