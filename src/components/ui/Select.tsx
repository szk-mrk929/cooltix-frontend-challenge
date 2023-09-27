import { TextSizeStyles } from '@@styles/globals';
import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

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
    padding: 0.125em 0.25em;
    border-width: 2.5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 0.25rem;
    transition: all 0.25s ease;

    &:hover {
      background-color: var(--color-blue-4-25);
      box-shadow: 0 0 0 2.5px var(--color-blue-4-50);
    }
    &:focus-within {
      box-shadow: 0 0 0 2.5px var(--color-blue-4-50);
    }

    option {
      background-color: white;
    }
  }
`;

/**
 * UI component: Select
 */
export default forwardRef<HTMLSelectElement, SelectProps>(function Select({ label, options, ...props }, ref) {
  return (
    <SelectWrapper>
      {label && <label>{label}</label>}
      <select {...props} ref={ref}>
        {options.map(({ label, value }, i) => (
          <option value={value} key={i}>
            {label}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
});
