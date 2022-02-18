import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components/native';
import { loginUser } from '../apollo';
import ContainerBase from '../components/container/ContainerBase';
import CenterLayout from '../components/layout/CenterLayout';
import DismissKeyboard from '../components/layout/DismissKeyboard';
import Brand from '../components/shared/Brand';
import Button from '../components/shared/Button';
import Form from '../components/shared/Form';
import Link from '../components/shared/Link';
import PlaceholderInput from '../components/shared/PlaceholderInput';
import Toast from '../components/shared/Toast';
import Poppins from '../components/text/Poppins';
import { LoginMutationVariables, useLoginMutation } from '../generated/graphql';
import { LogInScreenNavigationProp, LogInScreenRouteProp } from '../navigators/Auth';
import { FormType } from '../types/form';

const Description = styled(Poppins)`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled(PlaceholderInput)`
  margin-bottom: 10px;
`;

const LinkContainer = styled(ContainerBase)`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin: 30px;
  margin-top: -20px;
`;

const LinkMessage = styled(Poppins)`
  margin-right: 5px;
`;

const ErrorMessage = styled(Poppins)`
  color: ${({ theme }) => theme.errorColor};
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
`;

export default function LogInScreen() {
  const { params } = useRoute<LogInScreenRouteProp>();
  const navigation = useNavigation<LogInScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    setError,
    setFocus,
    clearErrors,
    formState: { isValid, errors },
  } = useForm<FormType<LoginMutationVariables>>({
    mode: 'onChange',
    defaultValues: {
      username: params?.username || '',
    },
  });

  const [login, { loading }] = useLoginMutation({
    onCompleted({ login: { ok, error, token } }) {
      if (ok) {
        navigation.goBack();
        navigation.replace('Main', { screen: 'Home' });
        loginUser(token as string);
      } else {
        setError('result', { message: error as string });
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  const onSubmitValid = handleSubmit((variables) => {
    loading || login({ variables });
  });

  return (
    <DismissKeyboard>
      <CenterLayout>
        {params?.success && <Toast delay={500}>성공적으로 회원가입됐습니다!</Toast>}
        <Brand />
        <Form>
          <Description type="600SemiBold">노마드커피에 다시 방문해주셔서 감사합니다!</Description>
          <Controller
            name="username"
            control={control}
            rules={{ required: true, onChange: () => clearErrors('result') }}
            render={({ field: { onChange, ...props } }) => (
              <Input
                {...props}
                editable={!loading}
                onSubmitEditing={() => setFocus('password')}
                onChangeText={onChange}
                placeholder="아이디"
                textContentType="username"
                returnKeyType="next"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true, onChange: () => clearErrors('result') }}
            render={({ field: { onChange, ...props } }) => (
              <Input
                {...props}
                editable={!loading}
                onChangeText={onChange}
                secureTextEntry
                placeholder="비밀번호"
                textContentType="password"
                returnKeyType="done"
              />
            )}
          />
          <Button
            type="700Bold"
            loading={loading}
            disabled={!isValid || loading}
            onPress={onSubmitValid}
          >
            로그인
          </Button>
          <ErrorMessage>{errors.result?.message || ' '}</ErrorMessage>
        </Form>
        <LinkContainer>
          <LinkMessage>아직 계정이 없으신가요?</LinkMessage>
          <Link
            onPress={() => {
              navigation.popToTop();
              navigation.navigate('Auth', { screen: 'SignUp' });
            }}
          >
            회원가입
          </Link>
        </LinkContainer>
      </CenterLayout>
    </DismissKeyboard>
  );
}
