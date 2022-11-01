import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-lighter">{children}</div>
    </>
  );
};

export default Layout;
