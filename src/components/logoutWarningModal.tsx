import React, { useState, FC, useEffect } from 'react';
import { Alert } from 'antd';

import useInterval from 'components/useInterval';
import styled from 'styled-components';

interface Props {
  isVisible: boolean;
  logout: () => void;
}

const Container = styled.div`
  max-width: 900px;
  padding: 8px;
  margin: 0 auto;
`;

const LogoutWarningModal: FC<Props> = (props: Props) => {
  const [timeLeft, setTimeLeft] = useState<number>(60);

  const decreaseCountdownTimer = () => {
    if (timeLeft !== 0) {
      setTimeLeft(timeLeft - 1);
    }
    if (timeLeft === 0) {
      props.logout();
    }
  };
  useEffect(() => {
    setTimeLeft(60);
  }, [props.isVisible]);

  // Set up the interval.
  useInterval(() => {
    if (props.isVisible) {
      decreaseCountdownTimer();
    }
  }, [1000]);
  return props.isVisible ? (
    <Container>
      <Alert type='info' message={`Logging out due to inactivity in ${timeLeft}`} />
    </Container>
  ) : null;
};

export default LogoutWarningModal;
