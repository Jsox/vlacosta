import React, { useState } from 'react';

export default function useHover(ref){
  const [isMouseOn, setIsMouseOn] = useState(false);
  ref.target.onMouseEnter(()=>{setIsMouseOn(true)})
  ref.target.onMouseLeave(()=>{setIsMouseOn(false)})

  return {
    isHover: isMouseOn
  }
}

