import { StateType } from "../types";

const initialState: StateType = {
    user: null,
    currentNFTs: []    
}

export const reducer = (state = initialState, {type, payload}: any ) => {
    switch(type) {
        default: 
        return state
    }
}