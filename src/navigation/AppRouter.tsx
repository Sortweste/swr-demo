import { Suspense, lazy } from 'react';

import { CircularProgress } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const HomeConfig = lazy(() => import('pages/HomeConfig'));
const HomeBoundary = lazy(() => import('pages/HomeBoundary'));

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/">
            <HomeBoundary />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
