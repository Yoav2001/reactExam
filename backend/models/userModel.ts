export type User = {
    id: number,
    username: string,
    password: string,
    isAdmin: boolean,
}

export type GetUser = (userId: User["id"]) => Promise<User>;
export type GetUserViaUsername = (username: User["username"]) => Promise<User>;
export type GetAllUsers = () => Promise<User[]>;
export type AddUser = ({username, password, adminPassword}: any) => Promise<User>;
export type DeleteUser = (userId: User["id"]) => Promise<string>;
export type SetAdmin = (userId: User["id"]) => Promise<User>;