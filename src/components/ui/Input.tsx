import { TextSizeStyles } from '@@styles/globals';
import styled from '@emotion/styled';
import { forwardRef, type ComponentProps } from 'react';

/**
 * Types
 */
type InputProps = ComponentProps<'input'> & {
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
};

/**
 * Styled components
 */
const InputWrapper = styled.fieldset`
  display: flex;
  gap: 0.25em;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--color-gray-3);
  border-radius: 2rem;
  background-color: #fff;
  ${TextSizeStyles.normal}
  transition: all .25s ease;

  input {
    border: none;
    outline: none;
    font-size: 1em;
    appearance: none;
    background-color: transparent;

    &::placeholder {
      color: var(--color-gray-4, gray);
    }

    &:focus {
      border: none;
      outline: none;
    }
  }

  &:has(input:focus) {
    border-color: transparent;
    box-shadow: 0 0 0 2px var(--color-blue-3);
  }
`;

/**
 * UI component: Input
 */
export default forwardRef<HTMLInputElement, InputProps>(function Input({ leftComponent, rightComponent, ...props }, ref) {
  return (
    <InputWrapper>
      {/* <legend>Disabled login fieldset</legend> */}
      {leftComponent}
      <input {...props} ref={ref} />
      {rightComponent}
    </InputWrapper>
  );
});
