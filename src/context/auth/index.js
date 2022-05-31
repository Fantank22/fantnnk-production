import React, { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

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
