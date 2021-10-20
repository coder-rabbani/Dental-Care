import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

//user Auth hooks for handling firebase authentication using context api
const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;