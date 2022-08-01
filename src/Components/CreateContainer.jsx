import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md';
import { categories } from '../utilities/data';
import Loader from './Loader';

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = () => {};
  
  const deleteImage =() => {};

  const saveDetails =() => {};

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center'>
        {
          fields && (
            <motion.p initial = {{opacity: 0}}
                      animate = {{opacity: 1}}
                      exit = {{opacity: 0}}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold
              ${alertStatus === "danger"
              ? "bg-red-400 text-red-800"
              : "bg-emerald-400 text-emerald-800"
              }`}>
              {msg}
            </motion.p>
          )
        }

        <div className='w-full py-2 border-b border-gray-300 flex items-center justify-center gap-2'>
          <MdFastfood className='text-xl text-gray-700' />
          <input 
            type='text' 
            required value={title}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Give me a title'
            className='w-full h-full text-lg bg-transparent outline-none 
              border-none placeholder:to-gray-300 text-textColor'
            />
        </div>

        <div className='w-full'>
          <select 
            onChange={(e) => setCategory(e.target.value)} className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'>
            <option value='other' className='bg-white'>
              Select a Food Choice 
            </option>
            {categories && categories.map(item => (
              <option key={item.id} className='text-base border-0 outline-none capitalize bg-white text-headingColor'
                value={item.paramName}
              >{item.name}</option>
            ))}
          </select>
        </div>

        <div className='group flex justify-center items-center flex-col border-2 border-dotted
          border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg'>
            {
              isLoading ? ( <Loader /> ) : (
                <>
                {!imageAsset ? ( 
                  <>
                    <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                      <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                        <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                        <p className='text-gray-500 hover:text-gray-700'>Click here to upload</p>
                      </div>
                      <input 
                        type='file' 
                        name='uploadimage' 
                        accept='image/*'
                        onChange={uploadImage} 
                        className='w-0 h-0'/>
                    </label>
                  </> 
                  ) : ( 
                  
                  <>
                    <div className='relative h-full'>
                      <img src={imageAsset} alt='uploaded image' className='w-full h-full object-cover'/>
                      <button 
                        type='button' className='absolute bottom-3 right-3 p3 rounded-full 
                        bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 
                          transition-all ease-out'
                          onClick={deleteImage}><MdDelete className='text-white'/></button>
                    </div>
                  </> 
                  )}
                </>
              )}
              <div className='w-full flex flex-col md:flex-row items-center gap-3'>
                    <div className='w-full py-2 border-b border-gray-300 flex items-center gap-3'>
                      <MdFoodBank className='text-gray-700 text-2xl'/>
                      <input type='text' 
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required 
                        placeholder='Calories' 
                        className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor' />
                    </div>

                    <div className='w-full py-2 border-b border-gray-300 flex items-center gap-3'>
                      <MdAttachMoney className='text-gray-700 text-2xl'/>
                      <input type='text' 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}          
                        required 
                        placeholder='Price' 
                        className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor' />
                    </div>
              </div>
              <div className='flex items-center w-full'>
                <button type='button ' className='ml-0 md:ml-auto w-full md:w-auto border-none 
                  outline-none bg-emerald-500 px12 rounded-lg text-lg py-12 font-semibold'
                  onClick={saveDetails}>Save</button>
              </div>
        </div>
      </div>
    
    </div>
  )
}

export default CreateContainer