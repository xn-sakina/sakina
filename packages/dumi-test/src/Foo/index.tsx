import React from 'react';
import { Button } from 'antd';

export default ({ title }: { title: string }) => {
  return (
    <>
      <Button>{title}</Button>
      <h1>{title}</h1>
    </>
  );
};
