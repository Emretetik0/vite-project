import React from 'react';
import { useNavigate } from 'react-router-dom';
import ev from "/icons/ev.svg";

const Geri = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Home");
  }

  return (
    <div>
      <button onClick={handleClick}>
        {/* SVG içeriğine fill ekleyin */}
        <img src={ev} alt="" className='bg-gray-900 w-16' />
      </button>
    </div>
  );
}

export default Geri;
