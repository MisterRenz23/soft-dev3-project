import React, { useEffect, useState } from 'react';
import NavbarUser from '../../components/NavbarUser/NavbarUser.js';
import Splash from '../../Pages/Splash/Splash.js';

const ServicesUser = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <Splash loading="loading" /> : <NavbarUser />}</div>;
};

export default ServicesUser;
