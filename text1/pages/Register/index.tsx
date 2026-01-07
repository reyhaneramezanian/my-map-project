import { RegisterPage } from "../../src/components/pages/index";
import Layout from "../../src/layouts/layout";
const Index: NextPageWithLayout = () => {
  return <RegisterPage />;
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
