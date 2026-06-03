declare module 'react-router-dom' {
  import type React from 'react';

  export type To = string | Partial<Location>;
  export type NavigationType = 'POP' | 'PUSH' | 'REPLACE';
  export type Location<State = unknown> = {
    pathname: string;
    search: string;
    hash: string;
    state: State;
    key?: string;
  };
  export type NavigateOptions = {replace?: boolean; state?: unknown};
  export type LinkProps = Omit<React.ComponentProps<'a'>, 'href'> & {to: To};
  export type NavLinkRenderProps = {isActive: boolean; isPending: boolean};
  export type NavLinkProps = Omit<LinkProps, 'className' | 'style'> & {
    end?: boolean;
    className?: string | ((props: NavLinkRenderProps) => string | undefined);
    style?:
      | React.CSSProperties
      | ((props: NavLinkRenderProps) => React.CSSProperties | undefined);
  };

  export function BrowserRouter(props: {
    children?: React.ReactNode;
    basename?: string;
    future?: Record<string, boolean>;
  }): React.ReactElement;
  export function HashRouter(props: {
    children?: React.ReactNode;
    basename?: string;
    future?: Record<string, boolean>;
  }): React.ReactElement;
  export const Link: React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  export const NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  export function Navigate(props: {
    to: To;
    replace?: boolean;
  }): React.ReactElement | null;
  export function Route(props: {
    path?: string;
    element?: React.ReactNode;
  }): React.ReactElement | null;
  export function Routes(props: {
    children?: React.ReactNode;
    location?: Location;
  }): React.ReactElement | null;
  export function useLocation(): Location;
  export function useNavigate(): (
    to: To | number,
    options?: NavigateOptions,
  ) => void;
  export function useNavigationType(): NavigationType;
}

declare module 'react-router-dom/server' {
  import type React from 'react';

  export function StaticRouter(props: {
    children?: React.ReactNode;
    location?: string;
    basename?: string;
    future?: Record<string, boolean>;
  }): React.ReactElement;
}
