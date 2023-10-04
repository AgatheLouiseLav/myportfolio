import React from 'react';
import "./BannerBottom.css";

function BannerBottom({ quote }) {
  return (
	<div className='BannerBottom' ><p>{quote}</p></div>
  )
};

export default BannerBottom;