import React, { useState } from 'react';

const Tooltip = ({ content, sentiment }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="cursor-pointer"
    >
      {content}
      {visible && (
        <div
          className="absolute bg-white border border-gray-300 rounded p-2 text-sm shadow-lg z-10"
        >
          Sentiment: {sentiment}
        </div>
      )}
    </span>
  );
};

export default Tooltip;


