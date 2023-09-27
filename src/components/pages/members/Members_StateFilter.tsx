import { MembersStateFilterContainer } from '@@components/pages/members/Members.styles';
import Checkbox from '@@components/ui/Checkbox';
import { useMembers } from '@@contexts/MembersCtx';
import { useEffect } from 'react';

/**
 * Component: Members_StateFilter
 */
function Members_StateFilter() {
  const { stateList, filter, filterStateSet, filterStateChanged } = useMembers();
  const isAll = filter.state.length < stateList.length;

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('main > header');
    if (!el || el.offsetTop > window.scrollY) return;

    el.style.scrollMargin = '1rem';
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [filter.state]);

  return (
    <MembersStateFilterContainer as="aside">
      <header>
        <h3>States</h3>
        <Checkbox name="all/clear" label={isAll ? 'All' : 'Clear all'} checked={!isAll} onChange={() => filterStateSet()} fontWeight={600} reverted />
      </header>

      {!!stateList.length && (
        <ul>
          {stateList.map(([state, count], i) => (
            <li key={i}>
              <Checkbox
                name={state} //
                label={`${state} (${count})`}
                checked={filter.state.includes(state)}
                onChange={filterStateChanged}
              />
            </li>
          ))}
        </ul>
      )}
    </MembersStateFilterContainer>
  );
}

export default Members_StateFilter;
