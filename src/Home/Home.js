import { Fragment } from 'react';
import HomeFeature from './HomeFeature';
import new_resume from './resources/new_resume.png';

const Home = () => {

    const features = [
        {
            id: 1,
            title: 'Multiple Resumes',
            subTitle: 'Create more than one resume. Use any one of the resume to apply for a job.'
        },
        {
            id: 2,
            title: 'Show your work',
            subTitle: 'Show your work, not your pictures, age, or gender.'
        },
        {
            id: 3,
            title: 'Find Jobs',
            subTitle: 'Find and apply for jobs that share your values.'
        }
    ];

    return (
        <Fragment>
            <section className='text-secondary text-white lg:pt-28'>
                <div className='container px-5 mx-auto pt-32 lg:px-4 lg:py-4'>
                    <div className='home-hero mb-10'>
                        <h1 className='home-hero-heading md:text-5xl lg:text-7xl'>
                            Make Resumes / Apply for Jobs
                        </h1>
                        <p className='mx-auto text-lg leading-snug tracking-tight text-blueGray-400 lg:w-1/2'>
                            Create multiple versions of your resume and appy for jobs
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className='home-hero-img'>
                    <img
                        className='object-cover object-center w-full mb-1 rounded-lg'
                        src={new_resume}
                        alt='new resume screen'
                    />
                </div>
            </section>
            <section className='text-white'>
                <div className='container px-5 mx-auto py-8 lg:px-20'>
                    <div className='home-hero mb-12'>
                        <h1 className='home-hero-heading md:text-8xl lg:text-6xl'>
                            Share your work
                            <br className='hidden lg:block' />
                            not your pictures, age, or gender
                        </h1>
                    </div>
                    <div className='flex flex-wrap -m-4'>
                        {features.map(feature => (
                            <HomeFeature
                                key={feature.id}
                                title={feature.title}
                                subTitle={feature.subTitle}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;
