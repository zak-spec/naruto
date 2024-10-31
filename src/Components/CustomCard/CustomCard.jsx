import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star'; // Importa el icono de estrella
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CustomCard.css';
import { FirebaseGuardar } from '../../Firebase/FirebaseGuardar'; // Asegúrate de que la ruta sea correcta

const CustomCard = ({ img, name, data, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  const handleFavoriteClick = async () => {
    if (!name || !img) {
      console.error('Invalid data: ', { name, img });
      return;
    }
    setIsFavorite(!isFavorite);
    try {
      await FirebaseGuardar(name, img, id);
      console.log('Character added to favorites');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <Card className="card container" data-aos={data}>
      <CardActionArea>
        <div className="card-container">
          <CardMedia
            component="img"
            className="card-media"
            image={img}
            alt={name}
          />
          <div className="card-content">
            <IconButton
              className="favorite-button"
              onClick={handleFavoriteClick}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <StarIcon sx={{ color: isFavorite ? 'yellow' : 'grey' }} /> {/* Cambia el color a amarillo si es favorito */}
            </IconButton>
            <Link to={`/Details/${id}`} className="link-no-decoration"> 
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {name}
                </Typography>
              </CardContent>
            </Link>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;