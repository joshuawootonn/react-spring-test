import { Radio as $Radio } from 'antd';
import { Field, FieldProps } from 'formik';
import * as React from 'react';
import { RadioGroupProps as $RadioGroupProps, RadioProps as $RadioProps } from 'antd/lib/radio/interface';
interface FormikFieldProps {
  name: string;
  validate?: (value: any) => undefined | string | Promise<any>;
}

export type RadioGroupProps = FormikFieldProps & $RadioGroupProps;
export type RadioProps = FormikFieldProps & $RadioProps

export const Radio = ({ name, validate, onChange, ...restProps }: RadioProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$Radio
        autoFocus={restProps.autoFocus}
        value={value}
        onChange={event => {
          setFieldValue(name, event.target.value);
          setFieldTouched(name, true);
          onChange && onChange(event);
        }}
        {...restProps}
      />
    )}
  </Field>
);

export default Radio;

Radio.Group = ({ name, validate, onChange, ...restProps }: RadioGroupProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$Radio.Group
        value={value}
        onChange={event => {
          setFieldValue(name, event.target.value);
          setFieldTouched(name, true);
          onChange && onChange(event);
        }}
        name={name}
        {...restProps}
      />
    )}
  </Field>
);

Radio.Button = $Radio.Button;
