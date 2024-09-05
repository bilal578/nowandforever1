import React, { useEffect } from 'react';
import Layout from '../../layout/layout';
import Section01 from './Section01/Section01';
import Section02 from './Section02/Section02';
import Section03 from './Section03/Section03';
import Section04 from './Section04/Section04';
import Section05 from './Section05/Section05';


const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <Layout title="About Us">
        <Section01/>
        <Section02/>
        <Section03/>
        <Section04/>
        <Section05/>
    </Layout>
   
  )
}

export default AboutPage