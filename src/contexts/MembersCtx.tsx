import { QueryMembers, QueryMembersType } from '@@graphql/actions/member';
import { Member } from '@@graphql/types';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { createContext, useCallback, useContext, useMemo, useReducer, type ChangeEvent, type Dispatch, type PropsWithChildren } from 'react';

/**
 * Types
 */
type MembersContextType = {
  members: Member[];
  filteredMembers: Member[];
  stateList: [string, number][];

  filter: MembersFiltersStateType;
  filterAction: Dispatch<ActionType>;

  loading: boolean;
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<QueryMembersType>>;
};

type MembersFiltersStateType = {
  name: string;
  state: string[];
};
type MembersFilterReducerFn = (state: MembersFiltersStateType, action: ActionType) => MembersFiltersStateType;
type NameChangedAction = { type: 'NameChanged'; value: string };
type StateSetAction = { type: 'StateSet'; value: string[] };
type StateChangedAction = { type: 'StateChanged'; state: string; value: boolean };
type ActionType = NameChangedAction | StateSetAction | StateChangedAction;

type MembersProviderProps = PropsWithChildren;

/**
 * Constants
 */
const initialFilterState: MembersFiltersStateType = { name: '', state: [] };

/**
 * Context: MembersContext
 */
const MembersContext = createContext<MembersContextType>({} as MembersContextType);

// enum StateFilter
const MembersFilterReducer: MembersFilterReducerFn = (state, action) => {
  const state_ = JSON.parse(JSON.stringify(state)) as MembersFiltersStateType;

  switch (action.type) {
    case 'NameChanged':
      return state_;

    case 'StateSet': {
      if (!Array.isArray(action.value)) state_.state = [];
      else state_.state = action.value || [];

      return state_;
    }

    case 'StateChanged': {
      if (action.value && !state_.state.includes(action.state)) state_.state = [...state_.state, action.state];
      else state_.state = state_.state.filter((v) => v !== action.state);

      return state_;
    }

    default:
      return state;
  }
};

/**
 * Context provider: MembersProvider
 */
export function MembersProvider({ children }: MembersProviderProps) {
  const [state, dispatch] = useReducer(MembersFilterReducer, initialFilterState);
  const { data, loading, error, refetch } = useQuery<QueryMembersType>(QueryMembers);

  const members = useMemo(() => data?.allMembers || [], [data?.allMembers]);
  const filteredMembers = useMemo(() => {
    if (!state.state.length) return members;
    return members.filter((member) => state.state.includes(member.address.state));
  }, [members, state.state]);
  const stateList: MembersContextType['stateList'] = useMemo(
    () =>
      Array.from(
        new Set(members.map((member) => member.address.state)), //
        (value) => [value, members.filter(({ address }) => address.state === value).length]
      ),
    [members]
  );

  return (
    <MembersContext.Provider
      value={{
        members, //
        filteredMembers,
        stateList,

        filter: state,
        filterAction: dispatch,

        loading,
        refetch,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
}

export function useMembers() {
  const { filterAction, ...context } = useContext(MembersContext);

  const filterStateSet = useCallback(() => {
    const all = context.stateList.map(([state]) => state);
    const filter = context.filter.state;

    return filterAction({
      type: 'StateSet',
      value: filter.length ? (filter.length < all.length ? all : []) : filter.length <= 0 ? all : [],
    });
  }, [context.filter.state, context.stateList, filterAction]);
  const filterStateChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      filterAction({
        type: 'StateChanged', //
        state: e.target.name,
        value: e.target.checked,
      }),
    [filterAction]
  );

  return { filterAction, filterStateSet, filterStateChanged, ...context };
}
export default useMembers;
