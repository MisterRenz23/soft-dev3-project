import React, { useEffect, useState } from 'react';
import Splash from '../../Pages/Splash/Splash.js';
import NavbarUser from '../../components/NavbarUser/NavbarUser.js';

const AboutUser = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <Splash loading="loading" /> : <NavbarUser />}</div>;
};

export default AboutUser;
