
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;