import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    let flag = sessionStorage.getItem('userObject') && Object.keys(sessionStorage.getItem('userObject')).length > 0;
    
    if (!flag) {
        // user is not authenticated
        return <Navigate to="/unauth" />;
    }
    return children;
};

export default ProtectedRoute;