/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import {Route, Routes} from 'react-router-dom';
import type {RouteConfig} from '../../common/routerUtils';

type ExtraProps = Record<string, unknown>;
type SwitchProps = Record<string, unknown>;

function routePaths(route: RouteConfig): (string | undefined)[] {
  const paths = ([] as (string | undefined)[]).concat(
    route.path ?? [undefined],
  );
  return paths.map((path) => {
    if (path === undefined || route.exact || path === '*') {
      return path;
    }
    return path.endsWith('*') ? path : `${path.replace(/\/$/, '')}/*`;
  });
}

function renderRoute(
  route: RouteConfig,
  index: number,
  extraProps: ExtraProps,
): ReactNode[] {
  const Component = route.component;
  const element = route.render ? (
    route.render({...extraProps, route})
  ) : Component ? (
    <Component {...extraProps} route={route} />
  ) : null;

  return routePaths(route).map((path) => (
    <Route
      key={`${route.key ?? index}-${path}`}
      path={path}
      element={element}
    />
  ));
}

// Provides the old react-router-config renderRoutes API on top of React Router
// v7, keeping Docusaurus route modules backwards-compatible.
export default function renderRoutes(
  routes?: RouteConfig[],
  extraProps: ExtraProps = {},
  switchProps: SwitchProps = {},
): ReactNode {
  return routes ? (
    <Routes {...switchProps}>
      {routes.flatMap((route, i) => renderRoute(route, i, extraProps))}
    </Routes>
  ) : null;
}
