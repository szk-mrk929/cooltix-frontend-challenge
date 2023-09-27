import { MembersPageContainer } from '@@components/pages/members/Members.styles';
import Members_List from '@@components/pages/members/Members_List';
import Members_Navbar from '@@components/pages/members/Members_Navbar';
import Members_StateFilter from '@@components/pages/members/Members_StateFilter';
import { PageTitle } from '@@styles/globals';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cooltix</title>
      </Head>
      <MembersPageContainer as="main">
        <PageTitle>Members</PageTitle>
        <Members_StateFilter />
        <Members_Navbar />
        <Members_List />
      </MembersPageContainer>
    </>
  );
}
