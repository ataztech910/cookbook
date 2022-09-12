const generateToken = () => {
    return Math.random().toString(36).substr(2) + Math.floor(Date.now() / 1000)
}

export { generateToken }