const success = (status: number, message: string, data?: (object | null)) => {
    if(typeof data == 'object') data = JSON.parse(JSON.stringify(data))
    return {
        status,
        message,
        data
    }
}

export { success }