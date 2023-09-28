import facebook from '@@assets/icons/facebook.svg';
import instagram from '@@assets/icons/instagram.svg';
import linkedin from '@@assets/icons/linkedin.svg';
import styled from '@emotion/styled';
import Image, {type StaticImageData} from 'next/image';
import type {ComponentProps} from 'react';

/**
 * Types
 */
type SocialIconVariantType = 'facebook' | 'linkedin' | 'instagram';
type SocialIconProps = ComponentProps<'a'> & {
  variant: SocialIconVariantType;
};

/**
 * Constants
 */
const VariantMap: Record<SocialIconVariantType, { icon: StaticImageData; href: string }> = {
  /** Dev: We could manage several dynamic import logic for these if we would have more items, but for now its fine I think. */
  facebook: { icon: facebook, href: 'https://www.facebook.com/CooltixGlobal' },
  linkedin: { icon: linkedin, href: 'https://www.linkedin.com/company/cooltix/' },
  instagram: { icon: instagram, href: 'https://www.instagram.com/cooltixhungary/' },
};

/**
 * Styled components
 */
const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: var(--color-blue-3);
`;

/**
 * Component: SocialIcon
 */
export default function SocialIcon({ variant = 'linkedin' }: SocialIconProps) {
  const { icon, href } = VariantMap[variant];
  return (
    <SocialLink href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={icon} //
        alt={'social-icon_' + variant}
        css={variant === 'instagram' && { paddingLeft: 2.75 }} //DEV: Was necessary to fix the position issue
      />
    </SocialLink>
  );
}
