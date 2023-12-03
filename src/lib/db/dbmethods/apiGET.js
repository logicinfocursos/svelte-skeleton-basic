export const apiGET = async ({ table, key, fieldSearch = 'code' }) => {

    try {
        const response = await fetch(`http://localhost:3005/${table}?${fieldSearch}=${key}`);
        return await response.json();

    } catch (error) {
        console.log("apiGET - Error!", error)
    }

    return null
}
