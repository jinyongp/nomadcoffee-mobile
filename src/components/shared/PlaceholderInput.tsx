import { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { ErrorProp } from '../../types/styled';

const Input = styled(TextInput)<ErrorProp>`
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.inputColor};
  border-radius: 5px;
  padding: 10px;
  color: ${({ theme, error }) => (error ? theme.errorColor : theme.fontColor)};
`;

type PlaceholderInputProps = TextInputProps & ErrorProp;

const PlaceholderInput = forwardRef<TextInput, PlaceholderInputProps>((props, ref) => {
  return (
    <Input
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
      placeholderTextColor="gray"
      {...props}
      ref={ref}
    />
  );
});

export default PlaceholderInput;
