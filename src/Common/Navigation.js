import { Fragment, useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import ResponsiveNavigation from './ResponsiveNavigation';

const Navigation = () => {

    const [display, setDisplay] = useState(() => ({
        section: false
    }));

    const toggleMenu = (e) => {
        e.preventDefault();
        setDisplay({
            section: !display.section
        });
    }

    return (
        <Fragment>
            <nav>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <div>
                                <div className='flex items-baseline space-x-4'>
                                    <a href='/' title='Home' className='text-white px-3 py-2 font-bold text-2xl'>Home</a>
                                </div>
                            </div>
                        </div>
                        <DesktopNavigation />
                        <div className='-mr-2 flex md:hidden'>
                            <button
                                onClick={toggleMenu}
                                type='button'
                                className='inline-flex items-center justify-center p-2 text-white'
                                aria-controls='mobile-menu'
                                aria-expanded='false'>
                                <span className='sr-only'>Open main menu</span>
                                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                                <svg className='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {display.section === true ? (
                    <div className='md:hidden' id='mobile-menu'>
                        <ResponsiveNavigation />
                    </div>
                ) : ''}
            </nav>
        </Fragment >
    )
}

export default Navigation;
