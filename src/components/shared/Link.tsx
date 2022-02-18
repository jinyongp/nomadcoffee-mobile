import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Poppins, { PoppinsProps } from '../text/Poppins';

const LinkButton = styled(TouchableOpacity)``;

const LinkTitle = styled(Poppins)`
  text-align: center;
  color: ${({ theme }) => theme.linkColor};
`;

type LinkProps = PoppinsProps;

export default function Link(props: LinkProps) {
  return (
    <LinkButton>
      <LinkTitle {...props} />
    </LinkButton>
  );
}
