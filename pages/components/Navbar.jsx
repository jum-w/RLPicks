import Router from "next/router";

const Navbar = ({ loggedIn }) => {
  const login = () => {
    if (loggedIn === false) {
      Router.push("/login");
    } else {
      Router.push("/home");
    }
  };
  return (
    <div className="flex justify-end p-3">
      <button
        className="bg-blue-600 rounded-md p-1
            text-white hover:bg-blue-700 duration-300 block text-center w-24"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
