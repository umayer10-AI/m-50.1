export const deleteUSer = async () => {
    'use server'

    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    return data
}