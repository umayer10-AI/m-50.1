import { revalidatePath } from "next/cache"

export const createUSer = async (formData) => {
    'use server'

    const newUSer = Object.fromEntries(formData.entries())

    const res = await fetch(`http://localhost:5000/user`,{
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newUSer)
    })
    
    const data = await res.json()

    console.log("After Delete",data)
    // if(data.deletedCount > 0){
    //     revalidatePath("/user")
    // }
    return data
}

export const deleteUSer = async (id) => {
    'use server'

    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    console.log("After Delete",data)
    if(data.deletedCount > 0){
        revalidatePath("/user")
    }
    return data
}