import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css'; // Asegúrate de crear y usar este archivo CSS

const DetailsPage = () => {
  let { id } = useParams();
  const [data, setData] = useState(null); // Cambiado a null para manejar mejor el estado de carga

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://dattebayo-api.onrender.com/characters/${id}`);
        setData(response.data); // Asume que estás obteniendo un array y quieres el primer elemento
      } catch (error) {
        console.log(error+"id:"+id);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!data) {
    return <div className='c'>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className='details-container'>
      <h1 className='t-5'>{data.name}</h1>
      {data.images && data.images.length > 0 && (
        <div className='carousel-container'>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {data.images.map((image, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={image} className="d-block w-100 carousel-image" alt={data.name} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
      <div className='character-details'>
        <p><strong>Debut:</strong></p>
        <ul>
          <li><strong>Manga:</strong> {data.debut.manga}</li>
          <li><strong>Anime:</strong> {data.debut.anime}</li>
          <li><strong>Novel:</strong> {data.debut.novel}</li>
          <li><strong>Movie:</strong> {data.debut.movie}</li>
          <li><strong>Game:</strong> {data.debut.game}</li>
          <li><strong>OVA:</strong> {data.debut.ova}</li>
          <li><strong>Appears In:</strong> {data.debut.appearsIn}</li>
        </ul>
        <p><strong>Family:</strong></p>
        <ul>
          <li><strong>Father:</strong> {data.family.father}</li>
          <li><strong>Mother:</strong> {data.family.mother}</li>
          <li><strong>Son:</strong> {data.family.son}</li>
          <li><strong>Daughter:</strong> {data.family.daughter}</li>
          <li><strong>Wife:</strong> {data.family.wife}</li>
          <li><strong>Adoptive Son:</strong> {data.family.adoptiveSon}</li>
          <li><strong>Godfather:</strong> {data.family.godfather}</li>
        </ul>
        <p><strong>Jutsu:</strong></p>
        {data.jutsu.slice(0, 5).map((jutsu, index) => (
          <span key={index}>{jutsu}{index < Math.min(data.jutsu.length, 5) - 1 ? ', ' : ''}</span>
        ))}
        {/* Agrega más detalles del personaje aquí */}
      </div>
    </div>
  );
}

export default DetailsPage;