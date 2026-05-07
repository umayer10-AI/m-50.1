import { getId } from '@/lib/data';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await getId(id)
    console.log(data)

    return (
        <div>
            <h2>USer:{data.name}</h2>
        </div>
    );
};

export default page;