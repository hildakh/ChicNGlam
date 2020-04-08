import React from "react";
import "./HomePage.styles.scss";
import Directory from "../../components/directory/Directory";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="homepage">
    <Directory />
    <div>
      <div className='preview'>
      <Link to="/shop">Preview Collections</Link>

      </div>
    </div>
  </div>
);

export default HomePage;
