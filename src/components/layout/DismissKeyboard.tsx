import { ReactNode } from 'react';
import { Keyboard, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled, { useTheme } from 'styled-components/native';

const DismissKeyboardContainer = styled.TouchableWithoutFeedback`
  flex: 1;
`;

type DismissKeyboardProps = {
  children: ReactNode;
};

export default function DismissKeyboard({ children }: DismissKeyboardProps) {
  const theme = useTheme();
  return (
    <DismissKeyboardContainer onPress={() => Keyboard.dismiss()} disabled={Platform.OS === 'web'}>
      <KeyboardAwareScrollView
        style={{ backgroundColor: theme.backgroundColor }}
        contentContainerStyle={{ flex: 1 }}
        extraHeight={100}
        scrollEnabled={false}
        enableAutomaticScroll={true}
      >
        {children}
      </KeyboardAwareScrollView>
    </DismissKeyboardContainer>
  );
}
