import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImg from '../../public/images/page_not_found.png';

const NotFoundPage = () => (
  <div className="notFoundPage">
    <img src={PageNotFoundImg} alt="logo" />
    <Link className="dashboardLink" to="/">Go Dashboard</Link>
  </div>
);

export default NotFoundPage;
