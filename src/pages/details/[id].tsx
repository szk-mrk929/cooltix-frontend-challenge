import Avatar from '@@assets/icons/avatar.svg';
import { MemberDetailsPageContainer } from '@@components/pages/details/Details.styles';
import { QueryMember, QueryMemberType } from '@@graphql/actions/member';
import { Member } from '@@graphql/types';
import { useQuery } from '@apollo/client/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

function MemberDetailsPage() {
  const {
    query: { id },
  } = useRouter();
  const { data, loading } = useQuery<QueryMemberType>(QueryMember, { pollInterval: 30000, variables: { id } });
  const member = data?.member;

  if (!member || loading) return <MemberDetailsPageContainer as="main">LOADING</MemberDetailsPageContainer>;

  const { firstName, lastName, email, phoneNumber, address, profilePictureUrl } = member ?? ({} as Member);
  const FullAddress = `${address.country},\n${address.postalCode} ${address.state} ${address.city},\n${address.addressLine}`;
  console.log('🚀 ➡️ file: [id].tsx:8 ➡️ MemberDetailsPage ➡️ data:', id, member, FullAddress);

  return (
    <>
      <Head>
        <title>Cooltix - Member details</title>
      </Head>
      <MemberDetailsPageContainer as="main">
        <figure>
          <i>🌞🌚</i>
          <Image
            src={profilePictureUrl} //
            placeholder="blur"
            blurDataURL={Avatar.src}
            alt="avatar"
            width={400}
            height={300}
            quality={100}
            priority
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </figure>
        <section>
          <h1>
            {firstName} {lastName}
          </h1>
          <a href={`tel:${phoneNumber}`} target="_blank">
            <i>📞</i>
            <b>{phoneNumber}</b>
          </a>
          <a href={`mailto:${email}`} target="_blank">
            <i>📧</i>
            <b>{email}</b>
          </a>
          <a href={`#`} target="_blank">
            <i>📍</i>
            <b>{FullAddress}</b>
          </a>
        </section>

        {/* <code style={{ whiteSpace: 'pre-line' }}>{JSON.stringify(address, null, 2)}</code> */}
      </MemberDetailsPageContainer>
    </>
  );
}

export default MemberDetailsPage;
