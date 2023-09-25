import styled from '@emotion/styled';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

/**
 * Types
 */
type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

/**
 * Styled components
 */
const CheckboxRoot = styled.label`
  display: flex;
  gap: 0.25em;
  align-items: flex-start;
  padding: 0.125em;
  cursor: pointer;
  user-select: none;

  input {
    flex: 0 0 auto;
    width: 1.5em;
    height: 1.5em;
    appearance: none;
    border-width: 2.5px;
    border-style: solid;
    border-color: var(--color-gray-5);
    border-radius: 0.25rem;
    background-color: transparent;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-position: center;
    transition: all 0.25s ease;

    &:hover {
      background-color: var(--color-blue-4-25);
      box-shadow: 0 0 0 2.5px var(--color-blue-4-50);
    }
    &:checked {
      background-color: var(--color-blue-4-75);
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    }
  }

  span {
    display: block;
    line-height: 1.25;
  }
`;

export default forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ label, children, ...props }) {
  return (
    <CheckboxRoot>
      <input type="checkbox" {...props} />
      <span>{label || children}</span>
    </CheckboxRoot>
  );
});
