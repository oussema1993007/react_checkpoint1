import React from 'react';

function Image({ imageUrl }) {
  return <img src={imageUrl} alt="Product" className="img-fluid rounded" />;
}

export default Image;