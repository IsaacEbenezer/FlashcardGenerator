import { ADD_GROUP, ADD_INPUT, DELETE_INPUT, DISPLAY_FLASH_CARDS} from './ActionTypes'

//creating actions

// 1. add group
export const addGroup = (data) => {
  return {
    type:ADD_GROUP,
    payload : data
  }
}
// 2.add input box
export const addInputBox = (data) => {
  return {
    type:ADD_INPUT,
    payload : data
  }
}

// 3. delete input box 
export const deleteInputBox = (data) => {
  return {
    type:DELETE_INPUT,
    payload : data
  }
}



// 4. display flashcards
export const showFalshCard = (data)=>{
  return {
    type:DISPLAY_FLASH_CARDS,
    payload:data
  }
}


