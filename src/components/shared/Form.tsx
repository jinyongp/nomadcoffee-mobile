import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import ContainerBase from '../container/ContainerBase';

const FormContainer = styled(ContainerBase)`
  margin: 30px;
`;

type FormProps = ViewProps;

export default function Form(props: FormProps) {
  return <FormContainer {...props} />;
}
