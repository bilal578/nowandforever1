import React, { useEffect } from 'react';
import Layout from '../../layout/layout';
import Section01 from './Section01/Section01'

const SpiritsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <Layout title="Merch">
        <Section01/>
    </Layout>
  )
}

export default SpiritsPage