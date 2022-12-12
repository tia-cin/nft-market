import { userNFT } from "../constants/dummy";
import { ActionTypes, ADD_SHOP_CART, CREATE_NFT, GET_CURRENT_NFTS, GET_USER, LIKE_NFT, NFTDataType, StateType } from "../types";

const initialState: StateType = {
    user: {
        username: '',
        picture: '',
        email: '',
        biography: '',
        createdNFTs: [],
        likedNFTs: [],
        shopCart: [],
    },
    currentNFTs: []    
}

export const reducer = (state = initialState, {type, payload}: ActionTypes ): StateType => {
    switch(type) {
        case GET_CURRENT_NFTS: 
            return {
                ...state,
                currentNFTs: payload
            }
        case GET_USER: 
            return {
                ...state,
                user: payload
            }
        case CREATE_NFT: 
            return {
                ...state,
                currentNFTs: [...state.currentNFTs, payload]
            }
        case LIKE_NFT: 
        case ADD_SHOP_CART: 
            return {
                ...state,
                user: {
                    ...state.user,
                    shopCart: [...state.user.shopCart, payload]
                }
            }
        default: 
            return state
    }
}