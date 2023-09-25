import CooltixLogo from '@@components/ui/CooltixLogo';
import SocialIcon from '@@components/ui/SocialIcon';
import { TextSizeStyles } from '@@styles/globals';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

/**
 * Styled components
 */
const FooterRoot = styled.footer`
  display: grid;
  gap: 1rem;
  justify-content: center;
  padding: 2.5rem;
  color: #fff;
  text-align: center;
  background-color: var(--color-gray-9);

  & > a {
    transition: color 0.25s ease;
    &:hover {
      color: var(--color-blue-3);
    }

    & > img {
      margin: auto;
    }
  }

  & > h5 {
    ${TextSizeStyles.small}
    font-weight: 500;
  }

  & > div {
    display: flex;
    gap: inherit;
  }
`;
const FooterMailLink = styled(({ to, className, ...props }: ComponentProps<'a'> & { to: string }) => {
  return (
    <a href={`mailto:${to}`} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {to}
    </a>
  );
})`
  ${TextSizeStyles.normal}
  font-weight: 500;
`;

/**
 * Layout component: Footer
 */
export default function Footer() {
  return (
    <FooterRoot>
      <a href="https://cooltix.hu" target="_blank" rel="noopener noreferrer">
        <CooltixLogo mono />
        {/** DEV: I chose SVG component because of the color change on hover.
         * @example Alternative solution:
         * import LogoWhite from '@@assets/logo-white.svg';
         * import Image from 'next/image';
         * <Image src={LogoWhite} alt="CooltixLogo_monowhite" />
         */}
      </a>

      <FooterMailLink to="ticket@cooltix.hu" />

      <h5>Follow us on networks</h5>
      <div role="group">
        <SocialIcon variant="facebook" />
        <SocialIcon variant="linkedin" />
        <SocialIcon variant="instagram" />
      </div>
    </FooterRoot>
  );
}
