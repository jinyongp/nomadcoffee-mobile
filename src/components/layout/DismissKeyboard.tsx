import { ReactNode } from 'react';
import { Keyboard, Platform } from 'react-native';
import styled from 'styled-components/native';

const DismissKeyboardContainer = styled.TouchableWithoutFeedback`
  flex: 1;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

type DismissKeyboardProps = {
  children: ReactNode;
};

export default function DismissKeyboard({ children }: DismissKeyboardProps) {
  return (
    <DismissKeyboardContainer onPress={() => Keyboard.dismiss()} disabled={Platform.OS === 'web'}>
      {children}
    </DismissKeyboardContainer>
  );
}
