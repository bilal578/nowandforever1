import { useEffect } from "react";
import Layout from "../../layout/layout";
import Section01 from "./Section01/Section01"
import Section02 from "./Section02/Section02"
import Section03 from "./Section03/Section03";

const Article3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Article3">
        <Section01/>
        <Section02/>
        {/* <Section03/>  */}
    </Layout>
  )
}

export default Article3;