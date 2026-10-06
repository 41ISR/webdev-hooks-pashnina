const TaskRow = ({name, done, counter}) => {
    return(
       <div className="task-row">
                            <button className={`task-check${done ? ' checked' : ''}`}>{done ? "✓" : ""}</button>
                            <span className={`task-title${done ? ' done' : ''}`}>
                                {name}
                            </span>
                            <div className="estimate-stepper">
                                <button className="stepper-btn">−</button>
                                <span className="stepper-value">{counter}</span>
                                <button className="stepper-btn">+</button>
                            </div>
                            <button className="quick-bump">+2</button>
                            <button className="icon-danger">✕</button>
                        </div>
    )
}
export default TaskRow