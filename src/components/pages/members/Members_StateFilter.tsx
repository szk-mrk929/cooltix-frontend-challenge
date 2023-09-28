import { MembersStateFilterContainer } from '@@components/pages/members/Members.styles';
import Checkbox from '@@components/ui/Checkbox';
import { useMembers } from '@@contexts/MembersCtx';
import { useEffect } from 'react';

/**
 * Component: Members_StateFilter
 */
function Members_StateFilter() {
  const { stateList, filter, loading, filterStateSet, filterStateChanged } = useMembers();
  const isAll = filter.state.length < stateList.length;

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('main > header');
    if (!el || el.offsetTop > window.scrollY) return;

    el.style.scrollMargin = 'calc(1rem + var(--nav-height,0))';
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [filter.state.length]);

  return (
    <MembersStateFilterContainer as="aside">
      <header>
        <h1>States</h1>
        {!loading && !!stateList.length && (
          <Checkbox
            name="all_clear" //
            label={isAll ? 'All' : 'Clear all'}
            checked={!isAll}
            onChange={() => filterStateSet()}
            fontWeight={600}
            reverted
          />
        )}
      </header>

      {!loading && !!stateList.length && (
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

      {loading && (
        <ul>
          {Array.from({ length: 20 }, (_, i) => (
            <li
              key={i}
              css={{
                width: '100%',
                height: '1.25rem',
                borderRadius: '2rem',
                backgroundColor: 'var(--color-gray-2, gray)',
              }}
            ></li>
          ))}
        </ul>
      )}
    </MembersStateFilterContainer>
  );
}

export default Members_StateFilter;
