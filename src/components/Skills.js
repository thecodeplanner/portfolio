
function Skills() {
    return (
        <>
            <div className='skills'>
                <div className='ui raised segment' style={{ backgroundColor: '#eabf9f' }}>
                    <h1 className='title'>Technical Skills  </h1>
                    <div className='ui four column centered grid'>

                        <div className='column'>

                            <li className='about-me'>JavaScript</li>
                            <li className='about-me'>React </li>
                            <li className='about-me'>Ruby</li>
                            <li className='about-me'>Rails</li>
                            <li className='about-me'>ActiveRecord </li>
                        </div>

                        <div className='column'>
                            <li className='about-me'>PostgreSQL</li>
                            <li className='about-me'>Node.js</li>
                            <li className='about-me'>HTML5</li>
                            <li className='about-me'>CSS3</li>
                        </div>
                        <div className='column'>
                            <li className='about-me'>Git</li>

                            <li className='about-me'>Heroku </li>
                            <li className='about-me'>OOP</li>
                            <li className='about-me'>MVC Framework</li>
                            <li className='about-me'>RESTful API Pattern </li>
                        </div>
                    </div>
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

export default Skills



