import { Navigate, useLocation } from "react-router-dom";

const NonProtectedRoutes = () => {
    let location = useLocation();
    const hasToken = true;

    if(hasToken) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
};

export default NonProtectedRoutes;