import React from 'react';
import "./BannerTop.css";

function BannerTop({ quote }) {
  return (
	<div className='BannerTop' ><p>{quote}</p></div>
  )
}

export default BannerTop