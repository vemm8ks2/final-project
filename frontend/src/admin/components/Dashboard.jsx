import { Grid2 as Grid } from '@mui/material';
import Achievement from '@/admin/components/Achievement';
import MonthlyOverview from '@/admin/components/MonthlyOverview';
import OrdersTableView from '@/admin/view/OrdersTableView';
import ProductsTableView from '@/admin/view/ProductTableView';

const Dashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }} className="shadow-lg shadow-gray-600">
          <Achievement />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} className="shadow-lg shadow-gray-600">
          <MonthlyOverview />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className="shadow-lg shadow-gray-600 p-4">
          <OrdersTableView />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className="shadow-lg shadow-gray-600 p-4">
          <ProductsTableView />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
