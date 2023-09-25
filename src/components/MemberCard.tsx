import Card from '@@components/ui/Card';
import { TextSizeStyles } from '@@styles/globals';
import styled from '@emotion/styled';

const MemberCardRoot = styled(Card)`
  padding: 2.5rem 1rem;
  text-align: center;

  figure {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: gray;
    margin-inline: auto;
    margin-bottom: 1.5rem;
  }
  h3 {
    ${TextSizeStyles.xl}
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.75rem;
  }
  small {
    ${TextSizeStyles.xs}
    font-weight: 500;
  }
`;
export default function MemberCard(props: any) {
  return (
    <MemberCardRoot as="article">
      <figure></figure>
      <h3>Name Name</h3>
      <p>text</p>
      <small>address</small>
    </MemberCardRoot>
  );
}
