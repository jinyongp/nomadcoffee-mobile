import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import ContainerBase from '../components/container/ContainerBase';
import CenterLayout from '../components/layout/CenterLayout';
import DismissKeyboard from '../components/layout/DismissKeyboard';
import Brand from '../components/shared/Brand';
import Button from '../components/shared/Button';
import Form from '../components/shared/Form';
import Link from '../components/shared/Link';
import PlaceholderInput from '../components/shared/PlaceholderInput';
import Poppins from '../components/text/Poppins';
import { CreateAccountMutationVariables, useCreateAccountMutation } from '../generated/graphql';
import { SignUpScreenNavigationProp } from '../navigators/Auth';
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

export default function SignUpScreen() {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    setError,
    setFocus,
    getValues,
    clearErrors,
    formState: { isValid, errors },
  } = useForm<FormType<CreateAccountMutationVariables> & { check: string }>({
    mode: 'onChange',
  });

  const [createAccount, { loading }] = useCreateAccountMutation({
    onCompleted({ createAccount: { ok, error } }) {
      if (ok) {
        navigation.goBack();
        navigation.navigate('LogIn', {
          username: getValues('username'),
          success: true,
        });
      } else {
        setError('result', { message: error as string });
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  const onSubmitValid = handleSubmit((variables) => {
    const { check, password } = variables;
    if (check === password) {
      loading || createAccount({ variables });
    } else {
      setError('result', { message: '?????? ??????????????? ???????????????.' });
      setFocus('check');
    }
  });

  return (
    <DismissKeyboard>
      <CenterLayout>
        <Brand />
        <Form>
          <Description type="600SemiBold">?????????????????? ????????? ????????? ???????????????!</Description>
          <Controller
            name="name"
            control={control}
            rules={{ required: true, onChange: () => clearErrors('result') }}
            render={({ field: { onChange, ...props } }) => (
              <Input
                {...props}
                onSubmitEditing={() => setFocus('username')}
                onChangeText={onChange}
                placeholder="??????"
                textContentType="name"
                returnKeyType="next"
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            rules={{ required: true, onChange: () => clearErrors('result') }}
            render={({ field: { onChange, ...props } }) => (
              <Input
                {...props}
                onSubmitEditing={() => setFocus('email')}
                onChangeText={onChange}
                placeholder="?????????"
                textContentType="username"
                returnKeyType="next"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: true, onChange: () => clearErrors('result') }}
            render={({ field: { onChange, ...props } }) => (
              <Input
                {...props}
                editable={!loading}
                onSubmitEditing={() => setFocus('password')}
                onChangeText={onChange}
                placeholder="?????????"
                textContentType="emailAddress"
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
                onSubmitEditing={() => setFocus('check')}
                onChangeText={onChange}
                secureTextEntry
                placeholder="????????????"
                textContentType="password"
                returnKeyType="next"
              />
            )}
          />
          <Controller
            name="check"
            control={control}
            rules={{ required: true, onChange: () => clearErrors('result') }}
            render={({ field: { onChange, ...props } }) => (
              <Input
                {...props}
                editable={!loading}
                onChangeText={onChange}
                secureTextEntry
                placeholder="???????????? ??????"
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
            ????????????
          </Button>
          <ErrorMessage>{errors.result?.message || ' '}</ErrorMessage>
        </Form>
        <LinkContainer>
          <LinkMessage>????????? ?????? ????????????????</LinkMessage>
          <Link
            onPress={() => {
              navigation.popToTop();
              navigation.navigate('Auth', { screen: 'LogIn' });
            }}
          >
            ?????????
          </Link>
        </LinkContainer>
      </CenterLayout>
    </DismissKeyboard>
  );
}
