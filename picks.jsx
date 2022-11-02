import Layout from "./components/Layout";

const Picks = () => {
  return <div className="text-white">Hello</div>;
};

Picks.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Picks;
