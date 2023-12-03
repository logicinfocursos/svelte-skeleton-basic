export const apiPOST = async ({ table, data }) => {

    try {
        const response = await fetch(`http://localhost:3005/${table}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        const result = await response.json();

        console.log(">>> apiPOST result", result)

        return result

    } catch (error) {
        console.log("apiGET - Error!", error)
    }

    return null
}
