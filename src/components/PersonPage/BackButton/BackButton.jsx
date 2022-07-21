import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  
  const handleGoBack = e => {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <a 
      href=''
      onClick={handleGoBack}
      >
      <button>Back</button>
    </a>
  )
}

export default BackButton
