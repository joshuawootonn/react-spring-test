import React from 'react';

interface Props {
  size: 'default' | 'small' | 'large';
}

const TwoEyes: React.FC<Props> = props => {
  const { size } = props;
  return (
    <svg
      height='60'
      width='90'
      version='1.1'
      id='L4'
      viewBox='0 0 100 100'
      enableBackground='new 0 0 0 0'
    >
      <circle fill='black' stroke='none' cx='75' cy='50' r='25' />

      <circle fill='black' stroke='none' cx='25' cy='50' r='25' />
      <circle fill='white' stroke='none' cx='32.5' cy='50' r='10'>
        <animateTransform
          attributeName='transform'
          dur='1.3s'
          type='rotate'
          from='360 25 48'
          to='0 25 52'
          repeatCount='indefinite'
        />
      </circle>
      <circle fill='white' stroke='none' cx='82.5' cy='50' r='10'>
        <animateTransform
          attributeName='transform'
          dur='1s'
          type='rotate'
          from='0 75 48'
          to='360 75 52'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  );
};

export default TwoEyes;
