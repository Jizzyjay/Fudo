import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import { AnimatePresence } from 'framer-motion'
import MainContainer from './Components/MainContainer.jsx'
import CreateContainer from './Components/CreateContainer.jsx'
import { getAllFoodItems } from './utilities/firebaseFuction.js'
import { useStateValue } from './context/StateProvider.js'
import { actionType } from './context/reducer'

const App = () => {
    const [{ foodItems }, dispatch] = useStateValue();

    const fetchFoodItems = async () => {
        await getAllFoodItems().then((data) => {
        dispatch({
            type: actionType.SET_FOOD_ITEMS,
            foodItems: data,
            });
        });
    };
    return (
        <AnimatePresence exitBeforeEnter>
            <div className='w-screen h-auto flex flex-col bg-primary'>
                <Header />
                <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
                    <Routes>
                        <Route path='/' element={<MainContainer />} />
                        <Route path='/createItem' element={<CreateContainer />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
        
        
    )
}

export default App