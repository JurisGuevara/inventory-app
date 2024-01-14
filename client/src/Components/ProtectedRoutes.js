import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    let location = useLocation();
    const hasToken = true;

    if(!hasToken) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    return children;
};

export default ProtectedRoutes;