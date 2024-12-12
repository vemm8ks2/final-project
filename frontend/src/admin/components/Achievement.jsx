import { Button, Card, CardContent, styled, Typography } from '@mui/material';

const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute',
});

const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute',
});

const Achievement = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: '.25px' }}>
          Shop with vemm8ks2
        </Typography>
        <Typography variant="body2">Congratulations 🥳</Typography>
        <Typography variant="h5" sx={{ my: 3 }}>
          420.8k
        </Typography>
        <Button variant="contained" size="small">
          View sales
        </Button>
        <TriangleImg src=""></TriangleImg>
        <TrophyImg src="https://picsum.photos/200/200"></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achievement;
