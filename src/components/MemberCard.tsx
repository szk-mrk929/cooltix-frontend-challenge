import Avatar from '@@assets/icons/avatar.svg';
import { MemberCardRoot } from '@@components/pages/members/Members.styles';
import { Member } from '@@graphql/types';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Types
 */
type MemberCardProps =
  | {
      data: Member;
      loading?: false;
    }
  | {
      data?: Member;
      loading: true;
    };

/**
 * Component: MemberCard
 */
export default function MemberCard({ data, loading }: MemberCardProps) {
  if (loading)
    return (
      <MemberCardRoot as={Link} href="#" className="loading">
        <figure>
          <Image
            src={Avatar.src} //
            width="100"
            height="100"
            placeholder="blur"
            blurDataURL={Avatar.src}
            alt={'avatar'}
          />
        </figure>
        <h1></h1>
        <p></p>
        <small></small>
      </MemberCardRoot>
    );

  const { id, firstName, lastName, profilePictureUrl, address } = data;
  const { postalCode, state, city, addressLine } = address;

  return (
    <MemberCardRoot as={Link} href={`/details/${id}`}>
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
