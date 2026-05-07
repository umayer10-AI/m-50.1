import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createUSer = async (formData) => {
    'use server'

    const newUSer = Object.fromEntries(formData.entries())
    console.log(newUSer)

    const res = await fetch(`http://localhost:5000/user`,{
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newUSer)
    })

    const data = await res.json()
    console.log("After Delete",data)
    
    if(data.insertedId){
        revalidatePath("/user")
    }
    return data
}

export const updateUSer = async (id,formData) => {
    'use server'

    const newUSer = Object.fromEntries(formData.entries())
    console.log(newUSer)

    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "PATCH",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newUSer)
    })

    const data = await res.json()
    console.log("After Delete",data)

    if(data.modifiedCount > 0){
        revalidatePath("/user")
        redirect('/user')
    }
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