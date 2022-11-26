import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get(
            '/auth/refresh',
            {withCredentials: true}
        );
        const { access_token } = response?.data;
        setAuth( prev => { 
            return { ...prev, access_token: access_token}
        });
        return access_token;
    }
    return refresh;
}

export default useRefreshToken