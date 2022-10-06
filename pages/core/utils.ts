const isLetter = (str: string) => {
    if (str.length === 0) return true
    return /[A-Za-z0-9 ]/.test(str)
}

export { isLetter }