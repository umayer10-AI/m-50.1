import { updateUSer } from '@/lib/action';
import { getId } from '@/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await getId(id)
    console.log(data)

    const a = async (formData) => {
        await updateUSer(id,formData)
    }

    return (
        <div>
            <h2>User Update: {data.name}</h2>
            <div className='w-1/2 mx-auto'>
                <form action={a} className="flex flex-col gap-4">
                              <TextField className="w-full" name="name" value={data?.name} type="text">
                                <Label>Name</Label>
                                <Input placeholder="Enter your name" />
                              </TextField>
                              <TextField className="w-full" name="email" value={data?.email} type="email">
                                <Label>Email</Label>
                                <Input placeholder="Enter your email" />
                              </TextField>
                              <TextField className="w-full" name="role" value={data?.role} type="text">
                                <Label>Role</Label>
                                <Input placeholder="Enter your role" />
                              </TextField>
            
                          <div className='flex gap-2'>
                            <Button slot="close" variant="secondary">
                            Cancel
                          </Button>
                          <Button type="submit" slot="close">Update</Button>
                          </div>
            
                            </form>
            </div>
        </div>
    );
};

export default page;