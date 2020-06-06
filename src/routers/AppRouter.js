import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDashboardPage from '../components/MovieDashboardPage';
import AddMoviePage from '../components/AddMoviePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={MovieDashboardPage} exact={true} />
        <Route path="/add" component={AddMoviePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
