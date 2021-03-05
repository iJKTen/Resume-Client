import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import NavigationAuthLinks from './NavigationAuthLinks';

const ResponsiveNavigationWrapper = (props) => {
    return (
        <div className='pt-4 pb-3 border-t border-white'>
            <div className='mt-3 px-2 space-y-1'>
                {props.children}
            </div>
        </div>
    )
}

const ResponsiveNavigation = () => {
    const authContext = useContext(AuthContext);

    if (authContext.user.accessToken === '') {
        return (
            <ResponsiveNavigationWrapper>
                <a
                    href='/login'
                    title='Home'
                    className='bg-gray-900 text-white px-3 py-2 text-sm font-bold'>
                    Login
                </a>
            </ResponsiveNavigationWrapper>
        )
    }

    return (
        <ResponsiveNavigationWrapper>
            <a
                href='/resumes'
                title='Resumes'
                className='block px-3 py-2 text-white text-2xl'>
                Resumes
            </a>
            <NavigationAuthLinks className='text-white text-2xl' />
        </ResponsiveNavigationWrapper>
    )
}

export default ResponsiveNavigation;
