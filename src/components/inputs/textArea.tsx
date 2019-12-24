import React from 'react';
import { Typography } from 'antd';
import { Input } from 'formik-antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
interface Props {
  name: string;
  title: string;
}

const { TextArea } = Input;
const TextAreaInput: React.FC<Props> = props => (
  <Wrapper>
    <Typography.Text>{props.title}</Typography.Text>
    <TextArea rows={4} name={props.name} />
  </Wrapper>
);

export default TextAreaInput;
