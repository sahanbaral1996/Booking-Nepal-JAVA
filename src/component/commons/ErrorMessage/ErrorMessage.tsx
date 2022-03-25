import React from 'react';
import { IErrorMessage } from '../../../types/IErrorMessage';

const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
  return (
    <div className="error-message">
      {message}
    </div>
  );
};

export default ErrorMessage;
