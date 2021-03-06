import Flex from '../components/flex';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated as a, interpolate } from 'react-spring';

const Wrapper = styled(Flex)`
  height: 100vh;
`;

const Svg = styled(a.svg)`
  height: 50vh;
  width: 50vh;
  #bg {
    fill: #7ebcbb;
  }

  #eye > path:nth-child(2) {
    fill: #f0f0f0;
  }
  #eye > g:first-of-type > path:nth-child(1) {
    fill: #159e97;
  }
  #eye > g:first-of-type > path:nth-child(2) {
    fill: #0f9390;
  }
  #eye > g:last-of-type > path:nth-child(2) {
    fill: #231f20;
  }
`;

const Content1: React.FC<{}> = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const interpBg = xy.interpolate(
    // @ts-ignore
    (x: any, y: any) =>
      `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(0, 0, 0)`
  );

  const interpEye = xy.interpolate(
    // @ts-ignore
    (x: any, y: any) => `translate(${x / 30 + 157},${y / 30 + 170}) scale(0.8)`
  );

  const interpIris = xy.interpolate(
    // @ts-ignore
    (x: any, y: any) => `translate(${x / 30},${y / 30 + -10})`
  );

  const interpPupil = xy.interpolate(
    // @ts-ignore
    (x: any, y: any) => `translate(${x / 25},${y / 25 + -10})`
  );

  const interpSpot = xy.interpolate(
    // @ts-ignore
    (x: any, y: any) => `translate(${8 + x / 80},${y / 80 + -10})`
  );

  const [{ xy2 }, set2] = useSpring(() => ({ xy2: [0, 0] }));

  const interpBg2 = xy2.interpolate(
    // @ts-ignore
    (x: any, y: any) =>
      `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(0, 0, 0)`
  );

  const interpEye2 = xy2.interpolate(
    // @ts-ignore
    (x: any, y: any) => `translate(${x / 30 + 157},${y / 30 + 170}) scale(0.8)`
  );

  const interpIris2 = xy2.interpolate(
    // @ts-ignore
    (x: any, y: any) => `translate(${x / 30},${y / 30 + -10})`
  );

  const interpPupil2 = interpolate(xy2, (x: any, y: any) => `translate(${x / 25},${y / 25 + -10})`);

  const interpSpot2 = interpolate(
    xy2,
    (x: any, y: any) => `translate(${8 + x / 80},${y / 80 + -10})`
  );
  const onMove = useCallback(({ clientX: x, clientY: y }) => {
    set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] });
    set2({ xy2: [x - window.innerWidth / 2, y - window.innerHeight / 2] });
  }, []);

  return (
    <Wrapper onMouseMove={onMove} justify='center' align='center' direction='row'>
      <Svg style={{ transform: interpBg }} viewBox='0 0 490 512'>
        <g id='bg'>
          <path d='M490,267 C490,402.308594 380.308594,512 245,512 C109.691406,512 0,402.308594 0,267 C0,131.691406 109.691406,22 245,22 C380.308594,22 490,131.691406 490,267 Z' />
        </g>
        <a.g id='eye' transform={interpEye}>
          <circle fill='#FFFFFF' cx='105' cy='104' r='104' />
          <path d='M32.5516247,104.414062 C32.5516247,52.4323881 70.6809824,9.35662037 120.492188,1.64794037 C115.264973,0.835536211 109.915627,0.414062 104.46247,0.414062 C47.0424901,0.414062 0.492188,46.9776706 0.492188,104.414062 C0.492188,161.850453 47.0424901,208.414062 104.46247,208.414062 C109.915627,208.414062 115.264973,207.992588 120.492188,207.180184 C70.6809824,199.471504 32.5516247,156.395736 32.5516247,104.414062 Z' />
          <a.g transform={interpIris}>
            <path d='M171.507812,103.921875 C171.507812,140.652344 141.730469,170.429688 105,170.429688 C68.269531,170.429688 38.492188,140.652344 38.492188,103.921875 C38.492188,67.191406 68.269531,37.414062 105,37.414062 C141.730469,37.414062 171.507812,67.191406 171.507812,103.921875 Z' />
            <path d='M59,103.921875 C59,70.679688 83.390625,43.132812 115.253906,38.203125 C111.910156,37.683594 108.488281,37.414062 105,37.414062 C68.269531,37.414062 38.492188,67.191406 38.492188,103.921875 C38.492188,140.652344 68.269531,170.429688 105,170.429688 C108.488281,170.429688 111.910156,170.160156 115.253906,169.640625 C83.390625,164.710938 59,137.164062 59,103.921875 Z' />
          </a.g>
          <a.g transform={interpPupil} fill='#FFFFFF'>
            <circle fill='#333031' cx='105' cy='104' r='36' />
            <path d='M83,103.921875 C83,86.402344 95.484375,71.804688 112.042969,68.527344 C109.765625,68.078125 107.410156,67.835938 105,67.835938 C85.070312,67.835938 68.914062,83.992188 68.914062,103.921875 C68.914062,123.851562 85.070312,140.007812 105,140.007812 C107.410156,140.007812 109.765625,139.765625 112.042969,139.316406 C95.484375,136.039062 83,121.441406 83,103.921875 Z' />
            <a.path
              transform={interpSpot}
              d='M148.335938,81.246094 C148.335938,92.210938 139.445312,101.101562 128.480469,101.101562 C117.511719,101.101562 108.625,92.210938 108.625,81.246094 C108.625,70.277344 117.515625,61.386719 128.480469,61.386719 C139.445312,61.386719 148.335938,70.277344 148.335938,81.246094 Z'
            />
          </a.g>
        </a.g>
      </Svg>
      <Svg style={{ transform: interpBg2 }} viewBox='0 0 490 512'>
        <g id='bg'>
          <path d='M490,267 C490,402.308594 380.308594,512 245,512 C109.691406,512 0,402.308594 0,267 C0,131.691406 109.691406,22 245,22 C380.308594,22 490,131.691406 490,267 Z' />
        </g>
        <a.g id='eye' transform={interpEye2}>
          <circle fill='#FFFFFF' cx='105' cy='104' r='104' />
          <path d='M32.5516247,104.414062 C32.5516247,52.4323881 70.6809824,9.35662037 120.492188,1.64794037 C115.264973,0.835536211 109.915627,0.414062 104.46247,0.414062 C47.0424901,0.414062 0.492188,46.9776706 0.492188,104.414062 C0.492188,161.850453 47.0424901,208.414062 104.46247,208.414062 C109.915627,208.414062 115.264973,207.992588 120.492188,207.180184 C70.6809824,199.471504 32.5516247,156.395736 32.5516247,104.414062 Z' />
          <a.g transform={interpIris2}>
            <path d='M171.507812,103.921875 C171.507812,140.652344 141.730469,170.429688 105,170.429688 C68.269531,170.429688 38.492188,140.652344 38.492188,103.921875 C38.492188,67.191406 68.269531,37.414062 105,37.414062 C141.730469,37.414062 171.507812,67.191406 171.507812,103.921875 Z' />
            <path d='M59,103.921875 C59,70.679688 83.390625,43.132812 115.253906,38.203125 C111.910156,37.683594 108.488281,37.414062 105,37.414062 C68.269531,37.414062 38.492188,67.191406 38.492188,103.921875 C38.492188,140.652344 68.269531,170.429688 105,170.429688 C108.488281,170.429688 111.910156,170.160156 115.253906,169.640625 C83.390625,164.710938 59,137.164062 59,103.921875 Z' />
          </a.g>
          <a.g transform={interpPupil2} fill='#FFFFFF'>
            <circle fill='#333031' cx='105' cy='104' r='36' />
            <path d='M83,103.921875 C83,86.402344 95.484375,71.804688 112.042969,68.527344 C109.765625,68.078125 107.410156,67.835938 105,67.835938 C85.070312,67.835938 68.914062,83.992188 68.914062,103.921875 C68.914062,123.851562 85.070312,140.007812 105,140.007812 C107.410156,140.007812 109.765625,139.765625 112.042969,139.316406 C95.484375,136.039062 83,121.441406 83,103.921875 Z' />
            <a.path
              transform={interpSpot2}
              d='M148.335938,81.246094 C148.335938,92.210938 139.445312,101.101562 128.480469,101.101562 C117.511719,101.101562 108.625,92.210938 108.625,81.246094 C108.625,70.277344 117.515625,61.386719 128.480469,61.386719 C139.445312,61.386719 148.335938,70.277344 148.335938,81.246094 Z'
            />
          </a.g>
        </a.g>
      </Svg>
    </Wrapper>
  );
};

export default Content1;
