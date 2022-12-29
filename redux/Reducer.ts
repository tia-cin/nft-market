import { ActionTypes, CREATE_NFT, GET_CURRENT_NFTS, GET_USER, LIKE_NFT, NFTDataType, StateType } from "../types";

const initialState: StateType = {
    user: {
        username: '',
        picture: '',
        email: '',
        biography: '',
        createdNFTs: [],
        likedNFTs: [],
        notifications: [],
        bids: []
    },
    currentNFTs: []    
}

export const reducer = (state = initialState, { type, payload }: ActionTypes ): StateType => {
    switch(type) {
        case GET_CURRENT_NFTS: 
            return {
                ...state,
                currentNFTs: payload
            }
        case GET_USER: 
            return {
                ...state,
                user: {
                    username: payload.username,
                    picture: payload.picture,
                    email: payload.email,
                    biography: payload.biography,
                    createdNFTs: payload.createdNFTs,
                    likedNFTs: payload.likedNFTs,
                    notifications: payload.notifications,
                    bids: payload.bids
                }
            }
        case CREATE_NFT: 
            return {
                ...state,
                currentNFTs: [...state.currentNFTs, payload]
            }
        case LIKE_NFT: 
            return {
                ...state
            }
        default: 
            return state
    }
}