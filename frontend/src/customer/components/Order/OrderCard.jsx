import { Grid2 as Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className="p-5 shadow-md hover:shadow-xl border">
      <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Grid size={{ xs: 6 }}>
          <div className="flex cursor-pointer">
            <img
              src="https://picsum.photos/620/620"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p className="">Men slim mid rise black jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <p>$ 1,000</p>
        </Grid>
        <Grid size={{ xs: 4 }}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: '15px', height: '15px' }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On March 03</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
