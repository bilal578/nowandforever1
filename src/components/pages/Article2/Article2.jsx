import React, { useEffect } from 'react';
import Layout from '../../layout/layout';
import Section01 from "./section01/section01"
import Section02 from "./section02/Section02"

const Article2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Article2">
        <Section01/>
        <Section02/>
    </Layout>
  )
}

export default Article2;