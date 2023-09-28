import { MembersPageContainer } from '@@components/pages/members/Members.styles';
import Members_List from '@@components/pages/members/Members_List';
import Members_Navbar from '@@components/pages/members/Members_Navbar';
import Members_StateFilter from '@@components/pages/members/Members_StateFilter';
import useMembers from '@@contexts/MembersCtx';
import { PageTitle } from '@@styles/globals';
import Head from 'next/head';

export default function MembersPage() {
  const { loading, refetch } = useMembers();

  return (
    <>
      <Head>
        <title>Cooltix - Members</title>
      </Head>
      <MembersPageContainer as="main">
        <PageTitle>
          Members{' '}
          <a css={{ cursor: 'pointer' }} onClick={() => refetch()}>
            {loading ? '⌛' : '🔁'}
          </a>
        </PageTitle>
        <Members_StateFilter />
        <Members_Navbar />
        <Members_List />
      </MembersPageContainer>
    </>
  );
}
