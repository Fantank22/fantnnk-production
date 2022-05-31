import React, { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    name: "Md Abdullah Al Noman",
    email: "yabdullahalnoman@gmail.com",
  });

  const updateData = () => {
    console.log("Update me");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
