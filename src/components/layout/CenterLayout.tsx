import { View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

type CenterLayoutProps = ViewProps;

export default function CenterLayout(props: CenterLayoutProps) {
  return <Container {...props} />;
}
