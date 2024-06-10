import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function ImgMediaCard() {
  const [burgurData, setBurgurData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/viewburgur');
        setBurgurData(response.data);
      } catch (error) {
        console.error('Error fetching burgur data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (burgur) => {
    setCart([...cart, burgur]);
  };

  return (
    <>
      <br /><br/><br/><div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <br /><br/><br/>
        {burgurData.map((burgur) => (
          <Card key={burgur._id} sx={{ maxWidth: 345, marginBottom: '20px', flex: '1 0 30%' }}>
            <CardMedia
              component="img"
              alt={burgur.title}
              height="140"
              image={burgur.imageUrl} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {burgur.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {burgur.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => addToCart(burgur)}>Add</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
