import { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const NavigationAuthLinks = (props) => {
    const authContext = useContext(AuthContext);
    const history = useHistory();

    const logutUser = () => {
        authContext.logout(() => {
            history.replace({ pathname: '/' });
        });
    }

    return (
        <Fragment>
            <a
                href='/profile'
                title='Your profile'
                className={`block px-3 py-2 ${props.className}`}>
                Your Profile
            </a>
            <a
                href='/settings'
                title='Settings'
                className={`block px-3 py-2 ${props.className}`}>
                Settings
            </a>
            <button
                onClick={logutUser}
                className={`block px-3 py-2 text-sm ${props.className} text-base`} role='menuitem'>
                Sign out
            </button>
        </Fragment>
    )
}

export default NavigationAuthLinks;
