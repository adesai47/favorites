import React from 'react';

interface ErrorPageProps {
  errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <div>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
