import Avatar from '@@assets/icons/avatar.svg';
import { MemberCardRoot } from '@@components/pages/members/Members.styles';
import { Member } from '@@graphql/types';
import Image from 'next/image';

/**
 * Types
 */
type MemberCardProps = {
  data: Member;
};

/**
 * Component: MemberCard
 */
export default function MemberCard({ data }: MemberCardProps) {
  const { id, firstName, lastName, profilePictureUrl, address } = data;
  const { postalCode, state, city, addressLine } = address;

  return (
    <MemberCardRoot as="article">
      <figure>
        <Image
          src={profilePictureUrl ?? Avatar.src} //
          width="100"
          height="100"
          placeholder="blur"
          blurDataURL={Avatar.src}
          alt={id + '_avatar'}
        />
      </figure>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>
        {state}, {postalCode}
      </p>
      <small>
        {addressLine} <br />
        {city}
      </small>
    </MemberCardRoot>
  );
}
