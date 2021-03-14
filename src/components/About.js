function About() {
    return (
        <>

            <div className='about ui raised segment' style={{ backgroundColor: '#eabf9f' }}>
                <h1 className='title'>Get to know me!</h1>

                <img className='profile-img' src='profile.png' alt='profile'></img>

                <p className='about-me'>Hi, lovely to meet you! Below are a few facts about me. I've been in the marketing and events industry for the past 5 years, but quickly fell in love with coding as I found so many similarities between the two. Just like planning events and building programs, I enjoy solving problems and working behind the scenes. Starting a project from conception all the way to execution is what I live for, along with all the details in between! I love the intersection between productivity and enhancing user experiences through cutting-edge technology. </p>
                <p className='text-content'><i className='code icon'></i> Full-stack software engineer with experience in Ruby on Rails and JavaScript based programming.</p>
                <p className='text-content'><i className='code icon'></i> Passion for creativity and building memorable experiences.</p>
                <p className='text-content'><i className='code icon'></i> Working directly with consumers and understanding their needs for a product allows me to be attentive to what is important in order to meet client and business goals with an emphasis on user engagement.</p>
                <p className='text-content'><i className='code icon'></i> Labradoodle lover, perfectionist and optimist.</p>
                <h3 className='connect'>Let's <a className='link' target='_blank' href='https://www.linkedin.com/in/melissa-mach/'>connect</a>!</h3>
            </div>
            <div className='skills'>
                <div className='ui raised segment' style={{ backgroundColor: '#eabf9f' }}>
                    <h1 className='proj-name'>Toolbox </h1>
                    <p className='text-content'>JavaScript (ES6) | React | Ruby | Rails | PostgreSQL | Node.js | HTML5 | CSS3 | ActiveRecord | Git | Heroku </p>
                    <p className='text-content'>Object Orientated Programming | MVC Framework | RESTful API Patterns</p>
                    <div>
                        <i className='title js icon' id='toolbox'></i>
                        <i className='title react icon' id='toolbox'></i>
                        <i className='title html5 icon' id='toolbox'></i>
                        <i className='title css3 icon' id='toolbox'></i>
                    </div>
                    <img className='title' src="https://icongr.am/devicon/ruby-plain.svg?size=148&color=faf3e0" alt="ruby" align="center" width="60" height="60" />
                    <img className='title' src="https://icongr.am/devicon/rails-plain-wordmark.svg?size=148&color=faf3e0" alt="rails" align="center" width="60" height="60" />
                    <img className='title' src="https://icongr.am/devicon/postgresql-plain.svg?size=148&color=faf3e0" alt="postgres" align="center" width="60" height="60" />
                    <img className='title' src="https://icongr.am/devicon/bootstrap-plain.svg?size=148&color=faf3e0" alt="bootstrap" align="center" width="60" height="60" />
                    <img className='title' src="https://icongr.am/devicon/git-plain-wordmark.svg?size=148&color=faf3e0" alt="git" align="center" width="70" height="70" />
                </div>
            </div>
        </>
    )
}

export default About