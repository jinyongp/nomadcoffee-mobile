import { View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 3px;
  padding: 20px;
  justify-content: center;
  align-items: stretch;
`;

type ContainerBaseProps = ViewProps;

export default function ContainerBase(props: ContainerBaseProps) {
  return <Container {...props} />;
}
