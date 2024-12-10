import { Button, Grid2 as Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const email = data.get('email');
    const password = data.get('password');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              className="w-full"
              variant="contained"
              size="large"
              sx={{ p: '.8rem 0' }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex flex-col justify-center items-center">
        <div className="py-3 flex items-center">
          <p>if you don't have account?</p>
          <Button onClick={() => navigate('/register')} className="ml-5">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
