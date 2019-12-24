import React from 'react';

import { Empty as AntEmpty } from 'antd';

export interface Props {
  description?: string;
}

export default function Empty(props: Props) {
  return (
    <AntEmpty
      description={props.description ? props.description : 'No more eyes to look at..'}
      image={require('assets/logos/home_badger.svg')}
    />
  );
}
