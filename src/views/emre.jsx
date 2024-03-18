import React from 'react';
import Geri from '../components/geri';
import AuthService from '../components/AuthService'; 
import Puan from '../components/Puan';
import ali from '../assets/ali.jpg';

const Emre = () => {
  const username = AuthService.getUser().username;

  return (
    <div className="flex flex-col min-h-screen">



      {/* Main Content */}
      <div className="flex-1">
        <img src={ali} alt="Resim açıklaması" className="w-screen h-screen" />
        <nav className="fixed top-0 left-0 right-0  flex items-center justify-between  bg-transparent">
        <div className="flex items-center">
        <Geri />
          
        </div>

        <div className="flex space-x-6 text-3xl">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Contact</a>
        </div>
        <div className="text-white text-lg font-bold p-2 border rounded-md">
            {username}
          </div>
      </nav>
      </div>

    </div>
  );
};

export default Emre;
