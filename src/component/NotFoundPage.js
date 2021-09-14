import React from "react";
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
  <div className='NotFoundPage'>
    404 - Not found! <Link to="/"> Go to home </Link>
  </div>
);
export default NotFoundPage;
