import { useEffect } from "react";
import Layout from "../../layout/layout"
import Section01 from "./Section01/Section01"
import Section02 from "./Section02/Section02";


const Article11 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Article11">
        <Section01/>
        <Section02/>
    </Layout>
  );
}

export default Article11;