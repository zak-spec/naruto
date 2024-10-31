import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import CustomCard from '../../Components/CustomCard/CustomCard';
import { createSvgIcon } from '@mui/material/utils';

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://dattebayo-api.onrender.com/characters?page=${page}&limit=20`);
        setCharacters(prevCharacters => [...prevCharacters, ...response.data.characters]);
        console.log(response.data.characters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, [page]);

  const loadMoreCharacters = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className='card d-flex flex-column mb-3'>
      {characters.map((character, index) => {
        const animation = index % 2 === 0 ? "fade-right" : "fade-left";
        return (
          <CustomCard 
            key={character.id} 
            img={character.images[0]} 
            name={character.name}
            id={character.id}
            data={animation} 
          />
        );
      })}
      <button onClick={loadMoreCharacters} className="load-more-button">
        <PlusIcon />
      </button>
    </div>
  );
};

export default HomePage;
