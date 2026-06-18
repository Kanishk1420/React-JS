import { useMemo, useState } from "react";
import { UserContext } from "./userUtils";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const value = useMemo(() => ({ user, setUser }), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
