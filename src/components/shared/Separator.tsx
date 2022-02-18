import { View } from 'react-native';
import styled from 'styled-components/native';

type SeparatorProps = {
  gap?: number;
};

const Divider = styled(View)<SeparatorProps>`
  width: ${({ gap }) => gap}px;
  height: ${({ gap }) => gap}px;
`;

export default function Separator({ gap = 10 }: SeparatorProps) {
  return <Divider gap={gap} />;
}
