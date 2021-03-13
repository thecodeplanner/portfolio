function About() {
    return (
        <>
        
        <div className='about ui raised segment' style={{backgroundColor:'#eabf9f'}}>
        
            <img className='profile-img' src='profile.png' alt='profile'></img>
            <h1 className='title'>Get to know me!</h1>
            <div className='ui two column centered grid'>
                <div className='column'>
                    <p className='text-content'><i className='code icon'></i> Full-stack software engineer with experience in Ruby on Rails and JavaScript based programming.</p>
                    <p className='text-content'><i className='code icon'></i> Passion for creativity and building memorable experiences.</p>
                    <p className='text-content'><i className='code icon'></i> Working directly with consumers and understanding their needs for a product allows me to be attentive to what is important in order to meet client and business goals with an emphasis on user engagement.</p>
                    <p className='text-content'><i className='code icon'></i> Labradoodle lover, perfectionist and optimist.</p>
                    <h3 className='connect'>Let's <a className='link' target='_blank' href='https://www.linkedin.com/in/melissa-mach/'>connect</a>!</h3>
                    {/* <p className='connect-icons'><a target='_blank' href='https://www.linkedin.com/in/melissa-mach/'><i className='linkedin icon'></i></a> <a target='_blank' href='https://github.com/thecodeplanner'><i className='github icon'></i></a> </p> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default About