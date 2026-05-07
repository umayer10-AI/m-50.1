import UserInfo from '@/component/UserInfo';
import { getData } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await getData()
    // console.log(data)

    return (
        <div>
            User Management: {data.length}
            <UserInfo p={data}></UserInfo>
        </div>
    );
};

export default page;