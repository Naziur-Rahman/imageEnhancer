import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="mx-4" id="error-page">
      <h1 className="text-4xl font-bold mb-2 text-center mt-40">Oops!</h1>
      <div className='text-center my-5'>
      <p className="mb-1">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500 italic">
        {error?.statusText || error?.message}
      </p>
      </div>
    </main>
  );
};

export default ErrorPage;
