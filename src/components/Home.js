import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()

    function viewWork() {
        history.push('/projects')
    }

return (
    <>
    <div className='ui raised segment' style={{backgroundColor:'#eabf9f'}}>
        <div className='homepage'>
            <span className='homepage-text'> Hi, I'm</span> <span className='name'>Melissa Mach.</span>
            <p className='homepage-text'>I'm a full-stack web developer.</p>
            <button onClick={viewWork} className="big ui black basic button">View my work <i className='arrow right icon'></i></button>            
        </div>
    </div>
    </>
)
}

export default Home