import axios from "axios";
import React from "react";
import Card from "./components/Card";
import Search from "./components/Search";

const App: React.FC = () => {
  const [userData, setUserData] = React.useState<any>(null);

  const getUserData = (username: string) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="dark bg-light-bacground dark:bg-dark-black flex h-screen justify-center items-center">
      {userData ? (
        <Card userData={userData} />
      ) : (
        <Search getUserData={getUserData} />
      )}
    </div>
  );
};

export default App;
