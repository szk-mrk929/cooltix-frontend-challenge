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
          <button
            css={{
              cursor: 'pointer',
              border: 'none',
              fontSize: '2rem',
              background: 'none',
              willChange: 'transform',
              transition: 'transform .25s ease',
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
            onClick={() => refetch()}
          >
            {loading ? '⌛' : '🔁'}
          </button>
        </PageTitle>
        <Members_StateFilter />
        <Members_Navbar />
        <Members_List />
      </MembersPageContainer>
    </>
  );
}
