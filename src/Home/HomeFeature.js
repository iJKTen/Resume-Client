const HomeFeature = ({ title, subTitle }) => {
    return (
        <div className='p-4 lg:w-1/3'>
            <div className='flex flex-col h-full p-8 rounded-lg'>
                <div className='flex inline-flex items-center mb-3'>
                    <div className='inline-flex items-center justify-center w-10 h-10 rounded-full text-primary bg-secondary'>
                        <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-6 h-6' viewBox='0 0 24 24'>
                            <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                        </svg>
                    </div>
                    <h2 className='ml-4 text-2xl text-white'>
                        {title}
                    </h2>
                </div>
                <span className='inline-block w-20 h-1 mt-6 mb-4 rounded-xl bg-gradient-to-r from-orange-800 to-orange-900'></span>
                <div className='flex-grow'>
                    <p className='text-lg leading-snug tracking-tight x-auto text-blueGray-400 '>
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeFeature;
