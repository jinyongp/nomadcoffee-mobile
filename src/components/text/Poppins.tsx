import { Text, TextProps } from 'react-native';
import styled from 'styled-components/native';

type PoppinsType =
  | '100Thin'
  | '200ExtraLight'
  | '300Light'
  | '400Regular'
  | '500Medium'
  | '600SemiBold'
  | '700Bold'
  | '800ExtraBold'
  | '900Black';

type StyledTextProps = {
  type?: PoppinsType;
};

export type PoppinsProps = TextProps & StyledTextProps;
const StyledText = styled(Text)<StyledTextProps>`
  font-family: ${({ type }) => `Poppins_${type}`};
  color: ${({ theme }) => theme.fontColor};
`;

export default function Poppins({ children, type = '400Regular', ...props }: PoppinsProps) {
  return (
    <StyledText type={type} {...props}>
      {children}
    </StyledText>
  );
}
