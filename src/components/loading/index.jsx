import React, { memo } from 'react';
import { LoadingWrapper } from './style';

const Loading = memo(() => {
  return (
    <LoadingWrapper className="flex justify-center items-center">
      <img src={require('@/assets/img/loading.gif')} alt="" />
    </LoadingWrapper>
  );
});

export default Loading;
