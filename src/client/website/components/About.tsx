import '../styles/About.css'

export const About = () => {
    return (
        <div className='about center'>
            <h1 id='name' className='text'>Hi, I'm Jay.</h1>
            <h2 id='position' className='text'>A Full-Stack Developer.</h2>
            <p id='description' className='text'>
                A software engineer from Ontario Canada with over 5 years of experience in designing and
                developing unique and innovative software applications. I can do everything from modding games to
                creating fullstack applications. Hit me up 🤙
            </p>

            <div className='about__contact center'>
                {/*{
                    resume &&
                    (
                    <a href={resume}>
                        <span type='button' className='btn btn--outline'>
                            Resume
                        </span>
                    </a>
                    )
                }

                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label='github'
                                className='link link--icon'
                            >
                                <GitHubIcon />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label='linkedin'
                                className='link link--icon'
                            >
                                <LinkedInIcon />
                            </a>
                        )}
                    </>
                )}*/}
            </div>
        </div>
    )
}