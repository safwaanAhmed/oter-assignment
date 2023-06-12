import { UserMessages, Common } from './interface'

const userMessages: UserMessages = {
    created: "User created Successfully",
    updated: "User data updated successfully",
    retrieved: "User data retrieved successfully",
    deleted: "User data deleted successfully",
    notFound: "User not found"
}

const commonMessages: Common = {
    somethingWrong: "Something went wrong",
    success: "success"
}
export { userMessages, commonMessages }