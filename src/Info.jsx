import React from 'react';

const Info = ({value}) => {
    
    return (
        <div className={`mt-4 ${value>=0? "bg-green-600": "bg-red-600"} h-16 w-44 mx-auto pt-5 rounded-md`}>
            <p className='text-gray-100 text-lg font-semibold'>Value is positive</p> 
        </div>
    );
};

export default Info;