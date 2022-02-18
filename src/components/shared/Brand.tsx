import { Text, TextProps } from 'react-native';
import styled from 'styled-components/native';

type BrandProps = TextProps & {
  size?: number;
};

const Title = styled(Text)<BrandProps>`
  font-family: DancingScript_700Bold;
  font-weight: 800;
  text-align: center;
  margin-right: 5px;
  letter-spacing: -4px;
  font-size: ${({ size }) => size}px;
  color: ${({ theme }) => theme.accentColor};
`;

export default function Brand({ size = 60, ...props }: BrandProps) {
  return (
    <Title size={size} {...props}>
      NomadCoffee
    </Title>
  );
}
