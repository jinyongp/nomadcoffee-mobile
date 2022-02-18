import { ActivityIndicator, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { DisabledProp } from '../../types/styled';
import Poppins, { PoppinsProps } from '../text/Poppins';

const ButtonContainer = styled(TouchableOpacity)<DisabledProp>`
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 5px;
  padding: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const ButtonTitle = styled(Poppins)`
  color: white;
  text-align: center;
  font-size: 16px;
`;

type ButtonProps = PoppinsProps & {
  disabled?: boolean;
  loading?: boolean;
};

export default function Button({
  type = '800ExtraBold',
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer disabled={disabled}>
      {loading ? (
        <ActivityIndicator size={19} color="white" />
      ) : (
        <ButtonTitle type={type} {...props} />
      )}
    </ButtonContainer>
  );
}
