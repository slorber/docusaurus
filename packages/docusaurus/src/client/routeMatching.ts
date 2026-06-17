/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type Location = {
  pathname: string;
  search: string;
  hash: string;
  state?: unknown;
  key?: string;
};

export type Match = {
  path: string;
  url: string;
  isExact: boolean;
  params: Record<string, string>;
};

export type RouteLike = {
  path: string;
  exact?: boolean;
  strict?: boolean;
  routes?: RouteLike[];
};

export type MatchedRoute<TRoute extends RouteLike = RouteLike> = {
  route: TRoute;
  match: Match;
};

type MatchPathOptions = {
  path: string;
  exact?: boolean;
  strict?: boolean;
};

const trimTrailingSlash = (str: string): string =>
  str.length > 1 ? str.replace(/\/+$/, '') : str;

const escapeRegExp = (str: string): string =>
  str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

function compilePath(path: string, {exact, strict}: MatchPathOptions): RegExp {
  if (path === '*') {
    return /^.*$/;
  }

  if (path === '/') {
    return exact ? /^\/?$/ : /^\//;
  }

  const routePath = strict ? path : trimTrailingSlash(path);
  const segments = routePath.split('/').map((segment) => {
    if (segment === '*') {
      return '.*';
    }
    if (segment.startsWith(':')) {
      return '([^/]+)';
    }
    return escapeRegExp(segment);
  });

  const trailingSlash = strict ? '' : '/?';
  const end = exact ? '$' : '(?=/|$)';
  return new RegExp(`^${segments.join('/')}${trailingSlash}${end}`);
}

function getParamNames(path: string): string[] {
  return path
    .split('/')
    .filter((segment) => segment.startsWith(':'))
    .map((segment) => segment.slice(1).replace(/[?*+]$/, ''));
}

export function matchPath(
  pathname: string,
  options: MatchPathOptions | string,
): Match | null {
  const matchOptions = typeof options === 'string' ? {path: options} : options;
  const {path, strict = false} = matchOptions;
  const exact = matchOptions.exact ?? false;
  const normalizedPathname = strict ? pathname : trimTrailingSlash(pathname);
  const regexp = compilePath(path, {...matchOptions, exact, strict});
  const match = regexp.exec(normalizedPathname);

  if (!match) {
    return null;
  }

  const [url, ...values] = match;
  const isExact = trimTrailingSlash(url) === trimTrailingSlash(pathname);

  if (exact && !isExact) {
    return null;
  }

  const params = Object.fromEntries(
    getParamNames(path).map((name, index) => [
      name,
      decodeURIComponent(values[index] ?? ''),
    ]),
  );

  return {path, url: path === '*' ? pathname : url, isExact, params};
}

export function matchRoutes<TRoute extends RouteLike>(
  routes: TRoute[],
  pathname: string,
): MatchedRoute<TRoute>[] {
  for (const route of routes) {
    const match = matchPath(pathname, {
      path: route.path,
      exact: route.exact,
      strict: route.strict,
    });

    if (!match) {
      continue;
    }

    const childMatches = route.routes
      ? matchRoutes(route.routes as TRoute[], pathname)
      : [];

    return [{route, match}, ...childMatches];
  }

  return [];
}
