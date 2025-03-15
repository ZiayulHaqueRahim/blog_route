// import React, {  useState } from 'react';
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
    console.log();
    
        // const [data, setData] = useState([])
    // useEffect(() => {
        
    //    fetch('https://api.github.com/users/ziayulhaquerahim')
    //    .then(response => response.json())
    //    .then(data =>{
    //         setData(data);
    //         console.log(data);
            
    //    })
    // }, []);

    return (
        <div className='text-center m-5 bg-gray-600 text-white p-4 text-3xl'>
            <h2>Github Followers:{data.followers} </h2>
            <img className='max-w-32 max-h-32 rounded-3xl ' src={data.avatar_url} alt='Github profile pic' />
        </div>
    );
};

export default Github;

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/ziayulhaquerahim')
    return response.json()
}