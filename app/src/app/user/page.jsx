import ModalTask from '@/component/ModalTask';
import UserInfo from '@/component/UserInfo';
import { createUSer, deleteUSer } from '@/lib/action';
import { getData } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await getData()
    // console.log(data)

    return (
        <div>
            <div className='flex justify-center items-center gap-3'>
                <h2>User Management: {data.length}</h2>
                <ModalTask createUSer={createUSer}></ModalTask>
            </div>
            <UserInfo p={data} deleteUSer={deleteUSer}></UserInfo>
        </div>
    );
};

export default page;