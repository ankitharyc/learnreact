import { createContext } from "react";

const UserContext = createContext({
    loggedUser : 'DefaultUser',
    secname : 'reddy'
})

export default UserContext;