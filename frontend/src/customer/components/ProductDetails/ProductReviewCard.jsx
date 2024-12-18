import { Avatar, Box, Grid2 as Grid, Rating } from '@mui/material';

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}>
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>nice product! I love this shirt.</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
