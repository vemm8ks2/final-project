import {
  AccountCircle,
  AttachMoney,
  MoreVert,
  SettingsCell,
  TrendingUp,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2 as Grid,
  IconButton,
  Typography,
} from '@mui/material';

const slaesData = [
  {
    stats: '245K',
    title: 'Sales',
    color: '#E5D68A',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />,
  },
  {
    stats: '12.5K',
    title: 'Customers',
    color: '#22CB5C',
    icon: <AccountCircle sx={{ fontSize: '1.75rem' }} />,
  },
  {
    stats: '1.54K',
    title: 'Products',
    color: '#DE4839',
    icon: <SettingsCell sx={{ fontSize: '1.75rem' }} />,
  },
  {
    stats: '88K',
    title: 'Revenue',
    color: '#12B0E8',
    icon: <AttachMoney sx={{ fontSize: '1.75rem' }} />,
  },
];

const Stats = () => (
  <>
    {slaesData.map((item, i) => (
      <Grid key={i} size={{ xs: 12, sm: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              bgcolor: `${item.color}`,
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption">{item.title}</Typography>
            <Typography variant="h6">{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ))}
  </>
);

const MonthlyOverview = () => {
  return (
    <Card sx={{ bgcolor: '#242B2E', color: 'white', height: '100%' }}>
      <CardHeader
        title="Monthly overview"
        action={
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600 }}>
              Total 48.5% growth{' '}
            </Box>
            🤩 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: { mb: 2.5, lineHeight: '2rem !imporant', letterSpacing: '.15px !important' },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !imporant` }}>
        <Grid container spacing={[5, 0]}>
          <Stats />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
