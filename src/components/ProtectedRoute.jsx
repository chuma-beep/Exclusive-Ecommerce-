import {  Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";


const ProtectedRoute = ({children})=>{
    const {session, loading} = useAuthContext();
    if(loading){
        return <h1>Loading...</h1>
    }
    return session ? children: <Navigate to= "/login" />
}
export default ProtectedRoute;