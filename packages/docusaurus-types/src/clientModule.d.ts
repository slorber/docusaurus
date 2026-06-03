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
  state: unknown;
  key?: string;
};

export type ClientModule = {
  onRouteDidUpdate?: (args: {
    previousLocation: Location | null;
    location: Location;
  }) => (() => void) | void;
  onRouteUpdate?: (args: {
    previousLocation: Location | null;
    location: Location;
  }) => (() => void) | void;
};
