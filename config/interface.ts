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