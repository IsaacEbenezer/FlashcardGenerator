import { ADD_GROUP, ADD_INPUT, DELETE_INPUT, DISPLAY_FLASH_CARDS } from "../action/ActionTypes";

const inputlocal = localStorage.getItem('card-input');
const grouplocal = localStorage.getItem('groupData');
const initialState = {
    inputData: inputlocal ? JSON.parse(inputlocal) : [],
    groupData: grouplocal ? JSON.parse(grouplocal) : []
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INPUT:
            localStorage.setItem('card-input', JSON.stringify([...state.inputData, action.payload]));
            return {
                ...state,
                inputData: [...state.inputData, action.payload]
            }
        case DELETE_INPUT:
            let data = state.inputData.filter((ele, ind) => ind !== action.payload);
            localStorage.setItem('card-input', JSON.stringify(data));
            return {
                ...state,
                inputData: [...data]
            }
        case ADD_GROUP:
            localStorage.removeItem('card-input');
            state.inputData = [];
            localStorage.setItem('groupData', JSON.stringify([...state.groupData, action.payload]))
            return {
                ...state,
                inputData: [...state.inputData],
                groupData: [...state.groupData, action.payload]
            }

        case DISPLAY_FLASH_CARDS:
            return {
                ...state,
                default: action.payload
            }
        default:
            return {
                ...state,
                default:0
            }
    }
}
