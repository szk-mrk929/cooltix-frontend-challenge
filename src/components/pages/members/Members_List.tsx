import MemberCard from '@@components/MemberCard';
import { MembersGrid } from '@@components/pages/members/Members.styles';
import useMembers from '@@contexts/MembersCtx';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Constants
 */
const maxMembersStep = 12;

/**
 * Component: Members_List
 */
export default function Members_List() {
  const ref = useRef<HTMLElement>(null);
  const { members, filteredMembers, filter, loading } = useMembers();
  const [MaxMember, setMaxMember] = useState(maxMembersStep);

  const fn = useCallback(() => {
    if (!ref.current) return;
    const current = window.scrollY + window.innerHeight - 150;
    const limit = ref.current.offsetTop + ref.current.offsetHeight;
    if (current >= limit) setMaxMember((v) => v + maxMembersStep);
  }, []);

  useEffect(() => setMaxMember(maxMembersStep), [filter.name, filter.state.length, filter.sort]);
  useEffect(() => {
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, [fn]);

  if (loading && !members.length)
    return (
      <MembersGrid>
        {Array.from({ length: maxMembersStep }, (_, i) => (
          <MemberCard loading key={i} />
        ))}
      </MembersGrid>
    );

  return (
    <MembersGrid ref={ref}>
      {filteredMembers.slice(0, MaxMember).map((member, i) => (
        <MemberCard data={member} key={i} />
      ))}
      {!loading && !filteredMembers.length && (
        <div className="NoItemFound">
          <i>⚠️</i>No item found<i>⚠️</i>
        </div>
      )}
    </MembersGrid>
  );
}
