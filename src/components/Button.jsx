import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lock from "/icons/lock.svg";
import Anasayfa from '../views/Anasayfa.jsx';
import AuthService from './AuthService';

function Button() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kullanıcı adı ve şifre kontrolü
    const user = AuthService.getUser();

    if (username === user.username && password === user.password) {
      // Başarılı ise Anasayfa'ya yönlendir
      navigate("/Anasayfa");
    } else {
      // Başarısız ise hata mesajını göster veya başka bir işlem yap
      toast.error("Hatalı kullanıcı adı veya şifre");
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <button onClick={handleClick}>
        <img
          src={lock}
          alt=""
          width={240}
          className={`${show ? "bg-yellow-300" : "bg-red-500"}`}
        />
        {show && (
          <div className='flex flex-col gap-4'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <label className='text-white'>Kullanıcı Adı</label>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label className='text-white'>Şifre</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

<button
  type='submit'
  className='bg-white text-black w-20 h-8 self-center rounded-xl'
>
  Giriş Yap
</button>

            </form>
          </div>
        )}
      </button>
      <ToastContainer />
    </div>
  );
}

export default Button;
