import { TextSizeStyles } from '@@styles/globals';
import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

/**
 * Types
 */
export type SelectOptionType = ComponentPropsWithoutRef<'option'> & {
  label: string;
  value: string;
};
type SelectProps = ComponentPropsWithoutRef<'select'> & {
  label?: string;
  options: SelectOptionType[];
};

/**
 * Styled components
 */
export const SelectWrapper = styled.fieldset`
  display: block;
  border: none;
  ${TextSizeStyles.small}

  label {
    display: inline-block;
    font-weight: 500;
    margin-right: 0.5em;
    user-select: none;
  }

  select {
    display: inline-block;
    border: none;
    outline: none;
    background: none;
    background-color: #fff;
    padding: 0.125em 0.25em;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-gray-3);
    border-radius: 0.25rem;
    transition: all 0.25s ease;

    &:not(:disabled):hover {
      border-color: transparent;
      background-color: var(--color-blue-4-25);
      box-shadow: 0 0 0 2.5px var(--color-blue-4-50);
    }
    &:not(:disabled):focus-within {
      border-color: transparent;
      box-shadow: 0 0 0 2.5px var(--color-blue-4-50);
    }

    option {
      background-color: white;
    }
  }

  &:has(select:disabled) {
    cursor: not-allowed;
    opacity: 40%;

    select {
      cursor: not-allowed;
    }
  }
`;

/**
 * UI component: Select
 */
export default forwardRef<HTMLSelectElement, SelectProps>(function Select({ label, options, ...props }, ref) {
  const id = useId();
  return (
    <SelectWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <select {...props} id={id} ref={ref}>
        {options.map(({ label, value }, i) => (
          <option value={value} key={i}>
            {label}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
});
