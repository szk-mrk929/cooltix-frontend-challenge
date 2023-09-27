import { MembersNavbar } from '@@components/pages/members/Members.styles';
import useMembers from '@@contexts/MembersCtx';

/**
 * Component: Members_Navbar
 */
export default function Members_Navbar() {
  const { members, filteredMembers } = useMembers();

  return (
    <MembersNavbar as="header">
      <p css={{ marginRight: 'auto' }}>
        Showing {filteredMembers.length} of {members.length} items
      </p>

      <select>
        <option value="first_name">First name</option>
        <option value="last_name">Last name</option>
      </select>
    </MembersNavbar>
  );
}
