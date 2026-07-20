declare module 'next/link' {
  import type { ComponentType, AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

  type LinkProps = {
    href: any;
    children?: any;
    legacyBehavior?: boolean;
  } & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'>;

  const Link: ComponentType<LinkProps>;
  export default Link;
}
