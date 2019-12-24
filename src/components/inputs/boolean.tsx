import React from 'react';
import { Typography } from 'antd';
import { Radio } from './radio';
import styled from 'styled-components';

const { Group } = Radio;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const RadioBox = styled(Group)`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  order: 1;
  label {
    margin-right: 8px;
    &::before {
      height: 0 !important;
    }
  }
`;
const Text = styled(Typography.Text)`
  margin-bottom: 8px;
  display: inline-block;
`;

interface Props {
  name: string;
  title: string;
  negativeText: string;
  positiveText: string;
  autoFocus?: boolean;
}
const BooleanInput: React.FC<Props> = props => (
  <Wrapper>
    <Text>{props.title}</Text>
    <RadioBox defaultValue={1} name={props.name}>
      <Radio autoFocus={props.autoFocus} name={props.name} value={1}>
        {props.negativeText}
      </Radio>
      <Radio name={props.name} value={2}>
        {props.positiveText}
      </Radio>
    </RadioBox>
  </Wrapper>
);

export default BooleanInput;
