import { ActionTypes, StateType } from "../types";

const initialState: StateType = {
    user: null,
    currentNFTs: []    
}

export const reducer = (state = initialState, {type, payload}: ActionTypes ): StateType => {
    switch(type) {
        default: 
            return state
    }
}