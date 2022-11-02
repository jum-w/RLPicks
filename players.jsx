import Layout from "./components/Layout";

const Players = () => {
  return <div className="text-white">Hello</div>;
};

Players.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Players;
