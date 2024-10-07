/** @format */

import { useState } from 'react';
import { Button } from './button';
import { FaDownload } from 'react-icons/fa';

const DownloadButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    // Disable the button and show loading
    setIsDisabled(true);
    setLoading(true);

    // Start a timer to re-enable the button after 45 seconds
    setTimeout(() => {
      setIsDisabled(false);
      setLoading(false); // Reset loading state after 45 seconds
    }, 45000);

    // Initiate the download
    const link = document.createElement('a');
    link.href = '/SDPbrochure.pdf';
    link.download = 'SDPbrochure.pdf'; // Optional: Specify the file name
    link.click();

    // Reset loading state after a short delay
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <Button
      variant='link'
      size='lg'
      onClick={handleDownload}
      disabled={isDisabled}
      className={`px-4 py-2 text-green rounded ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}>
      <FaDownload className='mr-2' size={18} />
      {loading
        ? 'Downloading...'
        : isDisabled
        ? 'Please wait...'
        : 'Download Brochure'}
    </Button>
  );
};

export default DownloadButton;
