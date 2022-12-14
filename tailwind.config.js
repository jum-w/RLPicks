/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.jsx",
    "./pages/register.jsx",
    "./pages/login.jsx",
    "./pages/components/Navbar.jsx",
    "./pages/components/Feature.jsx",
    "./pages/_document.js",
    "./pages/home.jsx",
    "./pages/components/Layout.jsx",
    "./pages/leaderboard.jsx",
    "./pages/players.jsx",
    "./pages/picks.jsx",
    "./pages/components/Teams.jsx",
    "./pages/components/Picked.jsx",
    "./pages/components/Popup.jsx",
  ],
  theme: {
    extend: {
      colors: {
        lighter: "#0e1016",
        lighter2: "#151922",
      },
    },
  },
  plugins: [],
};
