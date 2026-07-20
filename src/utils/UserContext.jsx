import { createContext, useContext } from "react";

const UserContext =createContext({
    name: "default-user",
    email:"default123@gmail.com",
})

export default UserContext;