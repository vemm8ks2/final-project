import { Button, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="bg-black text-white text-center mt-10"
        sx={{ bgcolor: 'black', color: 'white', py: 3 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="text">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Patners
            </Button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="text">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Supports
            </Button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="text">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="text">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" size={{ xs: 12 }}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{' '}
            <Link href="https://www.freepik.com" underline="always">
              Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
