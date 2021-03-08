function About() {
    return (
        <>
        <h1 className='title'>Get to know me!</h1>
        <div className='about ui raised segment'>
            <img className='profile-img' src='profile.png' alt='profile'></img>
            
            <div className='ui two column centered grid'>
                <div className='column'>
                    <p className='bio'>Full-stack software engineer with experience in Ruby on Rails and JavaScript based programming.</p>
                    <p className='bio'>Passion for creativity and building memorable experiences.</p>
                    <p className='bio'>Working directly with consumers and understanding their needs for a product allows me to be attentive to what is important in order to meet client and business goals with an emphasis on user engagement.</p>
                    <p className='bio'>Labradoodle lover, perfectionist and optimist.</p>
                    <h3 className='connect'>Let's <a target='_blank' href='https://www.linkedin.com/in/melissa-mach/'>connect</a>!</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default About