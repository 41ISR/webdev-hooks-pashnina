const TaskRow = ({setTasks, name, done, counter, id}) => {
    const handleCounter = (step) =>{
        setTasks((o)=> 
            o.map((el)=> el.id === id ? {...el, counter: el.counter + step} : el,))
    }

    const handleDone = () =>{
        setTasks((o)=> o.map((el)=> el.id === id ? {...el, done: !el.done} : el,))
    }

    const handleDelete = () =>{
        setTasks(o => o.filter(el => el.id !== id))
    }

    return(
       <div className="task-row">
                            <button onClick={handleDone} className={`task-check${done ? ' checked' : ''}`}>{done ? "✓" : ""}</button>
                            <span className={`task-title${done ? ' done' : ''}`}>
                                {name}
                            </span>
                            <div className="estimate-stepper">
                                <button onClick={()=>handleCounter(-1)} className="stepper-btn">−</button>
                                <span className="stepper-value">{counter}</span>
                                <button onClick={()=>handleCounter(1)} className="stepper-btn">+</button>
                            </div>
                            <button onClick={()=>handleCounter(2)} className="quick-bump">+2</button>
                            <button onClick={handleDelete} className="icon-danger">✕</button>
                        </div>
    )
}
export default TaskRow