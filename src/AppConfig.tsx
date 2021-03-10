import { SWRConfig } from 'swr';

import fetcher from 'api/axiosFetcher';
import AppRouter from 'navigation/AppRouter';

const AppConfig = () => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <AppRouter />
    </SWRConfig>
  );
};

export default AppConfig;
