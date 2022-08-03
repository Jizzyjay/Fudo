import React from 'react'

const RowContainer = ({ flag }) => {
    return (
        <div 
            className={`w-full my-12 ${
                flag ? "overflow-x-scroll" : "overflow-x-hidden flex-wrap justify-center"
                }`}
            >
                <div className='w-full md:w-350 h-auto shadow-md bg-blue-300  backdrop-blur-lg'>
                    
                </div>
            </div>
    )
}

export default RowContainer

