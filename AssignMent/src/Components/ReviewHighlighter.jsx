import React from 'react';
import Tooltip from './Tooltip';

const sentimentColors = {
  Positive: 'bg-green-100',
  Negative: 'bg-red-100',
  Mixed: 'bg-yellow-100',
  Neutral: 'bg-gray-100',
};

const ReviewHighlighter = ({ content, analytics }) => {
  const getHighlightedText = (text, highlights) => {
    let elements = [];
    let lastIndex = 0;

    highlights.forEach(({ start, end, sentiment }) => {
      if (lastIndex < start) {
        elements.push(text.slice(lastIndex, start));
      }
      elements.push(
        <span
          key={start}
          className={`${sentimentColors[sentiment]} relative inline-block px-1`}
        >
          <Tooltip content={text.slice(start, end)} sentiment={sentiment} />
        </span>
      );
      lastIndex = end;
    });

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements;
  };

  const highlights = analytics.flatMap(({ highlight_indices, sentiment }) =>
    highlight_indices.map(([start, end]) => ({ start, end, sentiment }))
  );

  return <p className="text-gray-800">{getHighlightedText(content, highlights)}</p>;
};

export default ReviewHighlighter;


