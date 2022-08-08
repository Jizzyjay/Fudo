import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({ flag }) => {
    return (
        <div 
            className={`w-full my-12 ${
                flag ? "overflow-x-scroll" : "overflow-x-hidden flex-wrap justify-center"
                }`}
            >
                <div className='w-300 md:w-225 h-auto my-12 backdrop-blur-lg'>
                    <div className='w-full flex items-center justify-between'>
                        <img 
                            src='https://firebasestorage.googleapis.com/v0/b/calories-b86c8.appspot.com/o/Images%2F1659910850519-r1.png?alt=media&token=82ca6a11-4ca4-4e20-8f77-fdbfaf604e32' 
                            alt=''
                            className='w-40 -mt-8' />

                        <div className='w-8 h-8 rounded-full bg-red-600 flex items-center
                            justify-center cursor-pointer hover:shadow-md'>
                            <MdShoppingBasket className='text-white ' />
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default RowContainer

