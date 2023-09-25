import MemberCard from '@@components/MemberCard';
import Card from '@@components/ui/Card';
import Checkbox from '@@components/ui/Checkbox';
import { PageContainer, TextSizeStyles } from '@@styles/globals';
import styled from '@emotion/styled';
import Head from 'next/head';

/**
 * Styled components
 */
const Title = styled.h1`
  ${TextSizeStyles.xxl}
  font-weight: 700;
  margin-block: 1rem;
  grid-column: 1 / -1;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Cooltix</title>
      </Head>
      <PageContainer
        as="main"
        css={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'auto 1fr',
          gridTemplateRows: 'auto auto 1fr',
        }}
      >
        <Title>Members</Title>

        <Card
          as="aside"
          css={{
            height: 'fit-content',
            maxWidth: '24ch',
            gridRow: '2 / -1',
          }}
        >
          <h3
            css={{
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            States
          </h3>
          <ul
            css={{
              '&>li:not(:last-of-type)': {
                marginBottom: '0.5rem',
              },
            }}
          >
            <li>
              <Checkbox label="Alaska" />
            </li>
            <li>
              <Checkbox label="Maryland" />
            </li>
            <li>
              <Checkbox label="Lorem ipsum dolor sit amet consectetur" />
            </li>
          </ul>
          <span>All</span>
        </Card>

        <Card
          as="header"
          css={{
            display: 'flex',
          }}
        >
          <p css={{ marginRight: 'auto' }}>Showing 9 of 25 items</p>

          <select>
            <option value="first_name">First name</option>
            <option value="last_name">Last name</option>
          </select>
        </Card>

        <section
          css={{
            display: 'grid',
            gap: 'inherit',
            gridTemplateColumns: 'repeat(auto-fit, minmax(14rem,1fr))',
          }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <MemberCard key={i}>
              items: Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt ad doloremque quasi labore nobis nihil et, voluptates illum
              aspernatur blanditiis, dolorum eos fuga nemo placeat exercitationem debitis voluptatibus voluptas?
            </MemberCard>
          ))}
        </section>
      </PageContainer>
    </>
  );
}
