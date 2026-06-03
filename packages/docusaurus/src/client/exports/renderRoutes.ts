/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ComponentType, type ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import {matchRoutes, type Match} from '../routeMatching';
import type {RouteConfig} from '@docusaurus/types';

type LoadableRouteConfig = Omit<RouteConfig, 'component' | 'routes'> & {
  component: ComponentType<{route: LoadableRouteConfig; match: Match}> & {
    preload?: () => Promise<unknown>;
  };
  routes?: LoadableRouteConfig[];
};

function RouteRenderer({routes}: {routes: LoadableRouteConfig[]}): ReactNode {
  const location = useLocation();
  const matches = matchRoutes(routes, location.pathname);
  const match = matches[0];

  if (!match) {
    return null;
  }

  const Component = match.route.component;
  return React.createElement(Component, {
    route: match.route,
    match: match.match,
  });
}

export default function renderRoutes(routes: LoadableRouteConfig[]): ReactNode {
  return React.createElement(RouteRenderer, {routes});
}
