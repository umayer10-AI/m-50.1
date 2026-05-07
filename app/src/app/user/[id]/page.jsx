import { getId } from '@/lib/data';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await getId(id)

    return (
        <div>
            
        </div>
    );
};

export default page;