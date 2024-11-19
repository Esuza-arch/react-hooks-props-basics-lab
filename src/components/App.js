import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import user data
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass the necessary props to Home */}
      <Home name={user.name} city={user.city} color={user.color} />
      {/* Pass the bio and links to About */}
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
