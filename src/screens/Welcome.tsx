import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import CenterLayout from '../components/layout/CenterLayout';
import Brand from '../components/shared/Brand';
import Button from '../components/shared/Button';
import Link from '../components/shared/Link';
import Separator from '../components/shared/Separator';
import { WelcomeScreenNavigationProp } from '../navigators/Auth';

const AnimatedContainer = styled(Animated.View)`
  flex: 2;
  justify-content: center;
`;

const ButtonContainer = styled(Animated.View)`
  margin: 30px;
`;

const ExploreButton = styled(Button)``;

const LinkContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

const LoginButton = styled(Link)`
  font-size: 16px;
  color: ${({ theme }) => theme.fontColor};
`;

const SignUpButton = styled(Link)`
  font-size: 16px;
  color: ${({ theme }) => theme.fontColor};
`;

export default function Welcome() {
  const { navigate, replace } = useNavigation<WelcomeScreenNavigationProp>();

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonFlex = useRef(new Animated.Value(0.000001)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.parallel([
          Animated.spring(buttonFlex, {
            toValue: 1,
            useNativeDriver: false,
          }),
          Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
          }),
        ]),
      ]).start();
    }, 100);
  }, []);

  const logoScale = buttonFlex.interpolate({
    inputRange: [0, 1],
    outputRange: [1.4, 1.1],
    extrapolate: 'clamp',
  });

  return (
    <CenterLayout>
      <AnimatedContainer
        style={{
          opacity: logoOpacity,
          transform: [{ scale: logoScale }],
        }}
      >
        <Brand />
      </AnimatedContainer>
      <ButtonContainer
        style={{
          flex: buttonFlex,
          opacity: buttonOpacity,
        }}
      >
        <ExploreButton onPress={() => replace('Main', { screen: 'Home' })}>
          커피숍 구경하기
        </ExploreButton>
        <LinkContainer>
          <LoginButton onPress={() => navigate('LogIn')}>로그인</LoginButton>
          <Separator gap={50} />
          <SignUpButton onPress={() => navigate('SignUp')}>회원가입</SignUpButton>
        </LinkContainer>
      </ButtonContainer>
    </CenterLayout>
  );
}
