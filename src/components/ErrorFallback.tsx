import { Grid } from '@material-ui/core';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        {error.message}
      </Grid>
    </Grid>
  );
};

export default ErrorFallback;
