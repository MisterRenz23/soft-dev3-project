import React, { useState, useEffect } from 'react';
import NavbarUser from '../../components/NavbarUser/NavbarUser';
import styles from './HomeUser.module.css';
import Splash from '../../Pages/Splash/Splash';

const HomeUser = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <Splash loading="loading" /> : <NavbarUser />}</div>;
};

export default HomeUser;
