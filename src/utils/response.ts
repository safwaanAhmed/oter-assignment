const success = (status: number, message: string, data?: (object | null)) => {
    if(typeof data == 'object') data = JSON.parse(JSON.stringify(data))
    return {
        status,
        message,
        data
    }
}

const errorResponse = (status: number, message: string, error?: (object | null)) => {
    return {
        status,
        message,
        error
    }
}

export { success, errorResponse }