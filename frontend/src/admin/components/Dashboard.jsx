import { Grid2 as Grid } from '@mui/material';
import Achievement from '@/admin/components/Achievement';
import MonthlyOverview from '@/admin/components/MonthlyOverview';
import ProductsTable from '@/admin/components/ProductsTable';

const Dashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Achievement />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <MonthlyOverview />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ProductsTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
