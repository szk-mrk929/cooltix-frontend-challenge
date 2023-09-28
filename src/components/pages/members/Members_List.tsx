import MemberCard from '@@components/MemberCard';
import { MembersGrid } from '@@components/pages/members/Members.styles';
import useMembers from '@@contexts/MembersCtx';

/**
 * Component: Members_List
 */
export default function Members_List() {
  const { members, filteredMembers, loading } = useMembers();

  if (loading && !members.length)
    return (
      <MembersGrid>
        {Array.from({ length: 12 }, (_, i) => (
          <MemberCard loading key={i} />
        ))}
      </MembersGrid>
    );

  return (
    <MembersGrid>
      {filteredMembers.map((member, i) => (
        <MemberCard data={member} key={i} />
      ))}
    </MembersGrid>
  );
}
