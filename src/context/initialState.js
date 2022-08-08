import { fetchUser } from "../utilities/fetchLocalStorage"

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
    foodItems: null,
};