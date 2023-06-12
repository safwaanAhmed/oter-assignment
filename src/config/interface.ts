export interface Return {
    status: number,
    message: string,
    data?: (object | null)
}
export interface User {
    firstName: string,
    lastName: string,
    fullName?: string
}
export interface Common {
    somethingWrong: string
}
export interface UserMessages {
    created: string,
    updated: string,
    retrieved: string,
    deleted: string,
    notFound: string
}