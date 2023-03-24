import { useState } from 'react';

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent = isEditing ? 
            <span className="task">
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </span>
        :   
            <span className="task">
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </span>

    return (
        <label>
            <input type="checkbox" checked={task.done} onChange={(e) => onChange({...task, done: e.target.checked })}/>
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    );
}

export default TaskList