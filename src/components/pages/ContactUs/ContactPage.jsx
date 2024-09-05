import React, { useEffect } from 'react';
import Layout from '../../layout/layout';
import Section01 from './Section01/Section01';
import Section02 from './Section02/Section02';

const ContactPage = () => {useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Contact Us">
        <Section01/>
        <Section02/>
    </Layout>
  )
}

export default ContactPage