export const fetchData = async (url: string, options?: any) => {
    const response = await fetch(url, options)
    const data = response.json()

    return data
}