import { MembersNavbar } from '@@components/pages/members/Members.styles';
import Select, { SelectOptionType } from '@@components/ui/Select';
import useMembers from '@@contexts/MembersCtx';

/**
 * Constants
 */
const sortOptions: SelectOptionType[] = [
  { label: 'No sort', value: '' },
  { label: 'First name (AB)', value: 'firstName_1' },
  { label: 'First name (BA)', value: 'firstName_-1' },
  { label: 'Last name (AB)', value: 'lastName_1' },
  { label: 'Last name (BA)', value: 'lastName_-1' },
];

/**
 * Component: Members_Navbar
 */
export default function Members_Navbar() {
  const { filter, members, filteredMembers, sortChange } = useMembers();

  return (
    <MembersNavbar as="header">
      <p>
        Showing {filteredMembers.length} of {members.length} members
      </p>
      <Select label="Order" value={filter.sort} onChange={sortChange} options={sortOptions} />
    </MembersNavbar>
  );
}
