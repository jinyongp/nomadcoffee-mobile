import { ActivityIndicator, View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

type CenterLayoutProps = ViewProps & {
  loading?: boolean;
};

export default function CenterLayout({ loading = false, children, ...props }: CenterLayoutProps) {
  return (
    <Container {...props}>{loading ? <ActivityIndicator size="large" /> : children}</Container>
  );
}
