import MemberCard from '@@components/MemberCard';
import { MembersGrid } from '@@components/pages/members/Members.styles';
import useMembers from '@@contexts/MembersCtx';

/**
 * Component: Members_List
 */
export default function Members_List() {
  const { filteredMembers } = useMembers();

  return (
    <MembersGrid>
      {filteredMembers.map((member, i) => (
        <MemberCard data={member} key={i} />
      ))}
    </MembersGrid>
  );
}
