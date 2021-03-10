import { ErrorBoundary } from 'react-error-boundary';
import { SWRConfig } from 'swr';

import fetcher from 'api/axiosFetcher';
import ErrorFallback from 'components/ErrorFallback';
import AppRouter from 'navigation/AppRouter';

const AppBoundary = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SWRConfig
        value={{
          fetcher,
          suspense: true,
        }}
      >
        <AppRouter />
      </SWRConfig>
    </ErrorBoundary>
  );
};

export default AppBoundary;
