import React, { useState } from 'react'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import Logo from '../asset/img/logo2.jpeg';
import Avatar from '../asset/img/avatar.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user, cartShow, cartItems}, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false)

    const login = async () => {

        if(!user) {
            const {
                user : {refreshToken, providerData},
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type : actionType.Set_USER,
                user : providerData[0]
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();

        dispatch({
            type: actionType.Set_USER,
            user: null,
        });
    }

    const showCart = ()  => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow
        })
    }

    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        {/* big screen */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt='Logo' />
                    <p className='text-headingColor text-x1 font-bold'>Fudo</p>
                </Link>

                <div className='flex items-center gap-8'>
                    <motion.ul 
                    initial = {{opacity : 0, x : 200}}
                    animate = {{opacity : 1, x : 0}}
                    exit = {{opacity : 0, x : 200}} 
                        className='flex items-center gap-8'>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out  duration-100'>Home</li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100'>Menu</li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100'>About Us</li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100'>Services</li>
                    </motion.ul>

                    <div className='relative flex items-center justify-center'
                        onClick={showCart}>
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
                        {
                            cartItems && cartItems.length > 0 && (
                                <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                                    <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                                </div>
                            )}
                    </div>

                    <div className='relative'>
                        <motion.img 
                            whileTap={{ scale: .6 }}
                            src={ user ? user.photoURL : Avatar } className="w-10 min-w-[40px] min-h-[40px] drop-shadow-x1 cursor-pointer rounded-full" 
                            alt='userprofile'
                            onClick={login}
                            />
                            {
                                isMenu && (
                                    <motion.div 
                                    initial={{opacity : 0, scale : 0.6}}
                                    animate={{opacity : 1, scale : 1}} 
                                    exit={{opacity : 0, scale : 0.6}} 
                                        className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                                    {
                                        user && user.email === "jizzyjay423@gmail.com" && (
                                            <Link to={'./createItem'}>
                                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base'>New Item <MdAdd /></p>
                                            </Link>
                                        )
                                    }
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base'
                                    onClick={logout}
                                    >Log Out <MdLogout /></p>
                            </motion.div>
                            )
                        }
                    </div>
                </div>
            </div> 

            <div className='flex items-center justify-between md:hidden w-full h-full'> 

            <div className='relative flex items-center justify-center'
                onClick={showCart}>
                <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
                {
                    cartItems && cartItems.length > 0 && (
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                        </div>
                    )}
            </div>

            <Link to={'/'} className='flex items-center gap-2'>
                <img src={Logo} className="w-8 object-cover" alt='Logo' />
                <p className='text-headingColor text-x1 font-bold'>Fudo</p>
            </Link>

            <div className='relative'>
                <motion.img 
                    whileTap={{ scale: .6 }}
                        src={ user ? user.photoURL : Avatar } className="w-10 min-w-[40px] min-h-[40px] drop-shadow-x1 cursor-pointer rounded-full" 
                        alt='userprofile'
                        onClick={login}
                            />
                        {
                            isMenu && (
                                <motion.div 
                                initial={{opacity : 0, scale : 0.6}}
                                animate={{opacity : 1, scale : 1}} 
                                exit={{opacity : 0, scale : 0.6}} 
                                    className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                                {
                                    user && user.email === "jizzyjay423@gmail.com" && (
                                        <Link to={'./createItem'}>
                                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 text-textColor text-base'
                                            onClick={() => setIsMenu(false)}>New Item <MdAdd /></p>
                                        </Link>
                            )}

                    <ul className='flex flex-col px-4 py-2'>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out  duration-100 hover:bg-slate-100 px-4 py-2'onClick={() => setIsMenu(false)}>Home</li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100 hover:bg-slate-100 px-4 py-2'onClick={() => setIsMenu(false)}>Menu</li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100 hover:bg-slate-100 px-4 py-2'onClick={() => setIsMenu(false)}>About Us</li>
                        <li className='text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out duration-100 hover:bg-slate-100 px-4 py-2'onClick={() => setIsMenu(false)}>Services</li>
                    </ul>
                        <p className='m-2 p-2 rounded-md shadow-md flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all duration-100 bg-slate-200 text-textColor text-base'
                            onClick={logout}
                            >Log Out <MdLogout /></p>
                </motion.div>
                            )
                        }
            </div>

            </div>
        </header>
    )
}

export default Header