import React, { useState } from 'react';

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // Hide the pop-up after 2 seconds
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      style={{ cursor: 'pointer', display: 'inline-block', position: 'relative' }}
    >
      email
      {copied && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, 10px)',
            backgroundColor: 'black',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 1000,
          }}
        >
          Copied!
        </div>
      )}
    </div>
  );
}

export default CopyEmail;
