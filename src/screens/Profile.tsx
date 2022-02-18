import { useReactiveVar } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { isAuthenticatedVar, logoutUser } from '../apollo';
import CenterLayout from '../components/layout/CenterLayout';
import Button from '../components/shared/Button';
import Poppins from '../components/text/Poppins';
import { ProfileScreenNavigationProp } from '../navigators/Main';

const NeedLoginContainer = styled.View`
  margin: 30px;
`;

const NeedLoginMessage = styled(Poppins)`
  text-align: center;
  margin-bottom: 20px;
`;

const NeedLoginButton = styled(Button)``;

const LogoutButton = styled(Button)``;

export default function ProfileScreen() {
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);

  return (
    <CenterLayout>
      {isAuthenticated ? (
        <LogoutButton onPress={() => logoutUser()}>로그아웃</LogoutButton>
      ) : (
        <NeedLoginContainer>
          <NeedLoginMessage>로그인이 필요한 서비스입니다.</NeedLoginMessage>
          <NeedLoginButton onPress={() => navigate('Auth', { screen: 'LogIn' })}>
            로그인
          </NeedLoginButton>
        </NeedLoginContainer>
      )}
    </CenterLayout>
  );
}
