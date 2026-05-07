import { getData } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await getData()

    return (
        <div>
            User MAnagement: {data.length}
        </div>
    );
};

export default page;