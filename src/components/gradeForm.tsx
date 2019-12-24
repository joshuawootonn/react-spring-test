import React from 'react';

import { Typography } from 'antd';
import { Button as AAAAButton, Spin } from 'aaaa';

import styled from 'styled-components';
import { Formik, Form as FormikForm } from 'formik';

import Tile from 'components/tile';
import { Exam, Grade } from 'constants/types';
import BooleanInput from './inputs/boolean';
import TextAreaInput from './inputs/textArea';
import Flex from './flex';

const Form = styled(FormikForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SpinnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Button = styled(AAAAButton)`
  margin-right: 8px !important;
`;

interface Props {
  isSubmitting: boolean;
  exam: Exam;
  gradeExam: (grade: Grade) => void;
}

const GradeForm: React.FC<Props> = props => {
  return (
    <>
      <Tile marginBottom={true}>
        <Typography.Title level={4}>Grading Information</Typography.Title>
        <Typography.Text>Exams Left: {props.exam.numberOfRemainingExams}</Typography.Text>
      </Tile>
      <Tile>
        <Typography.Title level={4}>Current Grade</Typography.Title>
        {props.isSubmitting ? (
          <SpinnerBox>
            <Spin variant='TwoEyes' />
          </SpinnerBox>
        ) : (
          <Formik<Grade & { state: FormState }>
            initialValues={{
              examId: props.exam.examId,
              notes: '',
              diabeticRetinopathyAssessmentCode: 1,
              glaucomaAssessmentCode: 1,
              imageQualityReviewCode: 1,
              macularEdemaAssessmentCode: 1,
              protocolViolationReviewCode: 1,
              state: 'ProtocolViolation',
            }}
            onSubmit={(values, actions) => {
              props.gradeExam(values);
            }}
            render={({ values, setFieldValue }) => {
              const goToState = (state: FormState): void => {
                setFieldValue('state', state);
              };
              return (
                <Form>
                  {values.state === 'ProtocolViolation' && (
                    <>
                      <BooleanInput
                        name='protocolViolationReviewCode'
                        title='Protocol Violation?'
                        negativeText='Absent'
                        positiveText='Present'
                        autoFocus={true}
                      />
                      {values.protocolViolationReviewCode === 2 ? (
                        <>
                          <TextAreaInput title='Notes' name='notes' />

                          <Flex align='center' justify='flex-end' direction='row'>
                            <Button htmlType='submit'>Submit</Button>
                          </Flex>
                        </>
                      ) : (
                        <Flex align='center' justify='flex-end' direction='row'>
                          <Button onClick={() => goToState('ImageQuality')}>Next</Button>
                        </Flex>
                      )}
                    </>
                  )}
                  {values.state === 'ImageQuality' && (
                    <>
                      <BooleanInput
                        name='imageQualityReviewCode'
                        title='Image Quality?'
                        negativeText='Sufficient'
                        positiveText='InSufficient'
                        autoFocus={true}
                      />
                      {values.imageQualityReviewCode === 2 ? (
                        <>
                          <TextAreaInput title='Notes' name='notes' />
                          <Flex align='center' justify='flex-end' direction='row'>
                            <Button htmlType='submit'>Submit</Button>
                          </Flex>
                        </>
                      ) : (
                        <Flex align='center' justify='space-between' direction='row'>
                          <Button onClick={() => goToState('ProtocolViolation')}>Prev</Button>
                          <Button onClick={() => goToState('Disease')}>Next</Button>
                        </Flex>
                      )}
                    </>
                  )}
                  {values.state === 'Disease' && (
                    <>
                      <BooleanInput
                        name='diabeticRetinopathyAssessmentCode'
                        title='Diabetic Retinopathy?'
                        negativeText='Absent'
                        positiveText='Present'
                        autoFocus={true}
                      />
                      <BooleanInput
                        name='glaucomaAssessmentCode'
                        title='Glaucoma?'
                        negativeText='Absent'
                        positiveText='Present'
                      />
                      <BooleanInput
                        name='macularEdemaAssessmentCode'
                        title='Macular Edema?'
                        negativeText='Absent'
                        positiveText='Present'
                      />
                      {values.diabeticRetinopathyAssessmentCode === 2 ||
                      values.macularEdemaAssessmentCode === 2 ||
                      values.glaucomaAssessmentCode === 2 ? (
                        <>
                          <TextAreaInput title='Notes' name='notes' />
                          <Flex align='center' justify='flex-end' direction='row'>
                            <Button htmlType='submit'>Submit</Button>
                          </Flex>
                        </>
                      ) : (
                        <Flex align='center' justify='space-between' direction='row'>
                          <Button onClick={() => goToState('ImageQuality')}>Prev</Button>
                          <Button htmlType='submit'>Submit</Button>
                        </Flex>
                      )}
                    </>
                  )}
                </Form>
              );
            }}
          />
        )}
      </Tile>
    </>
  );
};

export default GradeForm;

type FormState = 'ProtocolViolation' | 'ImageQuality' | 'Disease';
