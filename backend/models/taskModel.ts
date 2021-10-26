import { TaskDbModel } from "../db/taskDbLogic";
import { User } from "./userModel";

export type TaskType = {
    id: TaskDbModel['id'],
    heading: string,
    content: string,
    date: string,
    time: string,
    status?: 'completed' | 'irrelevantTask',
    isEditable: boolean,
}

export type GetTasks = (authorId: User['id']) => Promise<TaskType[]>;
export type AddTask = (task: TaskType, authorId: TaskDbModel['ownerId']) => Promise<string>;
export type EditTask = (task: TaskType) => Promise<string>;
export type DeleteTask = (id: TaskType['id']) => Promise<string>;