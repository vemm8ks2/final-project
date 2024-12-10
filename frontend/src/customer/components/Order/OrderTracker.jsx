import { Step, StepLabel, Stepper } from '@mui/material';

const steps = ['Placed', 'Order confirmed', 'Shipped', 'Out for delivered', 'Delivered'];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ fontSize: '44px' }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
