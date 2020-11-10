import React, { FC } from 'react';
import Button from 'antd/lib/button';
import Result from 'antd/lib/result';
import { useHistory } from 'react-router';

const NotFound: FC = () => {
  const history = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.replace('/')}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
