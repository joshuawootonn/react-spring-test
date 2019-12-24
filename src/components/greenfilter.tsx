import React from 'react';

export default function greenfilter() {
  return (
    <svg width='0' height='0' version='1.1'>
      <defs>
        <filter id='greenFilter' x='0%' y='0%' width='100%' height='100%'>
          <feColorMatrix
            id='svgcolormatrix'
            type='matrix'
            values='
  0 1 0 0 0
  0 1 0 0 0
  0 1 0 0 0
  0 0 0 1 0'
          />
        </filter>
      </defs>
    </svg>
  );
}
