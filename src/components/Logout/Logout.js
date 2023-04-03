import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout()
        .then(() => {
            navigate('/');
        })
        .catch(() => {
            navigate('/');
        });
    });
    return null;
}