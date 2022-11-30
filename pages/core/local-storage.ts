const updateStorage = (key: string, data: string) => {
    if (typeof window === 'undefined') {
        return null;
    }
    localStorage.setItem(key, data);
}

const getFromStorageByKey = (key: string, param?: string) => {
    if (typeof window === 'undefined') {
        return null;
    }
    if (!param) {
        return localStorage.getItem(key);
    }

    const storageToJSON = JSON.parse(localStorage.getItem(key) as string);
    return typeof storageToJSON === 'object' && storageToJSON[param];
}

export { updateStorage, getFromStorageByKey };