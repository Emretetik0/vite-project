import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useHistory yerine useNavigate kullanılıyor

const Puan = () => {
  const navigate = useNavigate(); // useNavigate hook'u kullanılıyor
  const [standingsData, setStandingsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.football-data.org/v4/competitions/CL/matches',
          {
            headers: {
              'X-Auth-Token': '5135407a8e3b4e29bac7c6b3ad0940c7',
            },
          }
        );
        setStandingsData(response.data.standings[0].table);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        // Hata durumunda sayfayı başka bir yere yönlendirmek istiyorsanız:
        // navigate('/hata'); // '/hata' sayfasına yönlendirme örneği
      }
    };

    fetchData();
  }, [navigate]); // navigate'i bağımlılık listesine ekleyin

  return (
    <div className="standings-container">
      {standingsData.map((team, index) => (
        <div key={index} className="standings-item">
          <h2 className="team-name">#{team.position} {team.team.name}</h2>
          <p className="team-points">Puan: {team.points}</p>
        </div>
      ))}
    </div>
  );
};

export default Puan;
