import React, { useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../asset/img/NotFound.svg'

const RowContainer = ({ flag, data, scrollValue }) => {
    const rowContainer = useRef()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue
    }, [scrollValue])

    return (
        <div
            ref={rowContainer}
            className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
                flag 
                    ? "overflow-x-scroll scrollbar-none" 
                    : "overflow-x-hidden justify-center flex-wrap"
                }`}
            >
                {
                    data && data.length > 0 ? (
                        data.map(item => (
                        <div 
                            key={item?.id}
                            className='w-300 h-[175px] min-w-[300px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg p-2  my-12 
                                backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between relative '>
                            <div className='w-full flex items-center justify-between'>
                                <motion.div
                                    whileTap={{ scale: 1.2 }}
                                    className='w-40 h-40 -mt-8 drop-shadow-2xl'
                                    >
                                <img
                                    src={item?.imageURL} 
                                    alt=''
                                    className='w-full h-full object-contain'
                                />
                                </motion.div>

                                <motion.div 
                                    whileTap={{ scale: .75 }}
                                    className='w-8 h-8 rounded-full bg-red-600 flex items-center
                                        justify-center cursor-pointer hover:shadow-md'>
                                    <MdShoppingBasket className='text-white ' />
                                </motion.div>
                            </div>
                            <div
                            className='w-full flex flex-col gap-4 items-end justify-end'>
                                <p className='text-textColor font-semibold text-base md:text-lg'>{item?.name}</p>
                                <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
                                <div className='flex items-center gap-8'>
                                    <p className='text-lg text-headingColor font-semibold'>
                                        <span className='text-sm text-red-500'>#</span> {item?.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                    ) : ( <div className='w-full flex flex-col items-center justify-center'> 
                            <img src={NotFound} className='h-340'/>
                            <p className='text-xl text-headingColor font-semibold my-2'>Items Not Available</p>
                        </div>
                        )}
            </div>
    )
}

export default RowContainer

