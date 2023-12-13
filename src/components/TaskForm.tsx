import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/Task";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Props {
    newAddTask: (task: Task) => void;
}
const initialState = { title: "", description: "" };

export default function TaskForm({ newAddTask }: Props) {
    const [task, setTask] = useState(initialState);

    const handleInputChange = ({
        target: { name, value },
    }: HandleInputChange) => {
        setTask({ ...task, [name]: value });
    };

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        newAddTask(task);
        setTask(initialState);
    };
    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Aadd Task</h1>
            <form action="" onSubmit={handleNewTask}>
                <input
                    type="text"
                    placeholder="Write a title"
                    name="title"
                    className="form-control mb-3 rounded-0 shadow-none border-0"
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    rows={2}
                    placeholder="Write a description"
                    className="form-control mb-3 shadow-none border-0"
                    onChange={handleInputChange}
                ></textarea>
                <button className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}
