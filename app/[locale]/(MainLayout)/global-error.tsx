'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full flex-col items-center justify-center gap-3 pt-36 '>
      <h1 className='text-xl'>Something went wrong!</h1>
      <h1 className='max-w-2xl p-4 text-gray-500'>{error?.message}</h1>
      <button
        className='rounded bg-primary px-2 py-1 text-[#fff]'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </button>
    </div>
  );
}
