import { Fragment } from 'react';

const ResumeListItem = (props) => {
    const resumes = props.resumes.map((item) => (
        <div
            className='md:flex md:items-center md:justify-between bg-secondary rounded-xl p-6 m-6'
            key={item._id}>
            <div
                className='flex-1 min-w-0'>
                <a
                    href={`/resumes/${item._id}`}
                    className='text-xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate'>
                    {item.resume_name}
                </a>
            </div>
            <div
                className='mt-5 flex md:mt-0 md:ml-4'>
                <span
                    className='sm:block'>
                    <a
                        href={`/resumes/${item._id}/edit`}
                        className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        <svg
                            role='img'
                            className='-ml-1 mr-2 h-5 w-5 text-gray-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'>
                            <path
                                d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'
                            />
                        </svg>
                        Edit
                    </a>
                </span>
            </div>
        </div>
    ))

    return (
        <Fragment>
            {resumes}
        </Fragment>
    )
}

export default ResumeListItem;
