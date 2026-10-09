const Switch = ({ showDone, setShowDone }) => {
    return (
        <div
            className="mount-point switch-row"
            id="mount-show-completed">
            <span onClick={() => setShowDone((o) => !o)} className={`switch${showDone ? " on" : ""}`}></span>
            <span>Show completed tasks</span>
        </div>
    )
}
export default Switch