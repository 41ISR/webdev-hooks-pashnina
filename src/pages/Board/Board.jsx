import Switch from '../../components/Switch'
import TaskRow from '../../components/TaskRow'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {useState} from 'react'
import { nanoid } from 'nanoid'

const PageBoard = () => {
    const [taskName, setTaskName] = useState('')
    const [tasks, setTasks] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const newTask = {
            name: taskName,
            done: false,
            counter: 0,
            id: nanoid(),
        }

        setTasks(o=>[...o, newTask])
    }
    return (
        <section className="page active" id="page-board">
            <div className="page-header">
                <h1 className="page-title">Board</h1>
                <p className="page-subtitle">Sprint 24, growth pod</p>
            </div>

            <div
                className="mount-wrap"
                data-hook="3.1 useState + useEffect (fetch on mount)">
                <div className="mount-point stats-row" id="mount-stats">
                    <div className="stat-card">
                        <div className="stat-value">24</div>
                        <div className="stat-label">Open</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">9</div>
                        <div className="stat-label">In progress</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">61</div>
                        <div className="stat-label">Done this sprint</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">7.4</div>
                        <div className="stat-label">Velocity</div>
                    </div>
                </div>
            </div>

            <div className="board-toolbar">
                <div className="mount-wrap" data-hook="1.2 useState (toggle)">
                 <Switch />   

                </div>
            </div>

            <div
                className="mount-wrap"
                data-hook="1.6 array · 1.1 counter · 1.5 functional update">
                <div className="mount-point" id="mount-tasklist">
                    <form onSubmit={handleSubmit} className="add-task-row">
                     <Input placeholder="Add a task and press Enter..." value={taskName} onChange={(e)=> setTaskName(e.target.value)} />   
                     <Button>Add</Button>
                    </form>
                    </div>
                    <div className="task-list">
                        {tasks.map((el)=> (<TaskRow key={el.id} {...el}/>))}
                    </div>
                </div>
            
        </section>
    )
}

export default PageBoard
