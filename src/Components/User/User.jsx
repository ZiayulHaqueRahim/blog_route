import React from 'react';
import { useParams } from 'react-router-dom';


const User = () => {
    const {id} = useParams();
    return (
        <div className='bg-gray-600 text-white text-4xl p-5 text-center rounded-4xl'>
            user: {id}
        </div>
    );
};

export default User;