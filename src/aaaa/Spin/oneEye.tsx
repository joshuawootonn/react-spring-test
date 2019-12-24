import React from 'react';

interface Props {
  size: 'default' | 'small' | 'large';
}

const OneEye: React.FC<Props> = props => {
  const { size } = props;
  let pixels;
  switch (size) {
    case 'default':
      pixels = 32;
      break;
    case 'small':
      pixels = 24;
      break;
    case 'large':
      pixels = 40;
      break;
    default:
      pixels = 32;
  }

  return (
    <svg
      height={pixels}
      width={pixels}
      version='1.1'
      x='0px'
      y='0px'
      viewBox={`0 0 ${pixels} ${pixels}`}
      enableBackground='new 0 0 0 0'
    >
      <circle fill='black' stroke='none' cx={pixels / 2} cy={pixels / 2} r={pixels / 3} />
      <circle fill='white' stroke='none' cx={pixels / 2} cy={pixels / 2} r={pixels / 6}>
        <animateTransform
          attributeName='transform'
          dur='1s'
          type='rotate'
          from={`360 ${pixels / 2} ${pixels / 2 - pixels / 16}`}
          to={`0 ${pixels / 2} ${pixels / 2 - pixels / 16}`}
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  );
};

export default OneEye;
