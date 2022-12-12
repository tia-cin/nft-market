import { ThunkAction } from "redux-thunk/es/types";
import { NFTData } from "../constants";
import { ActionTypes, ADD_SHOP_CART, CREATE_NFT, GET_CURRENT_NFTS, GET_USER, LIKE_NFT, NFTDataType } from "../types";
import { RootState } from "./Store";

export const getCurrentNFTs = (): ThunkAction<void, RootState, null, ActionTypes> => async (dispatch) => dispatch({
    type: GET_CURRENT_NFTS,
    payload: NFTData
})

export const getUserAction = (): ThunkAction<void, RootState, null,  ActionTypes> => async (dispatch) => dispatch({
    type: GET_USER,
    payload: {
        username: 'User Name',
        picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkit.com%2Fpng%2Ffull%2F115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png&f=1&nofb=1&ipt=cb9e2780799fa67bc36deb7c04be7ea59fb3dcae6e924472cf14d417cb667496&ipo=images',
        email: 'username@mail.com',
        biography: 'Cupidatat ea qui nostrud aliquip magna mollit et quis anim exercitation dolor voluptate sit. Incididunt reprehenderit officia adipisicing incididunt in ad ullamco Lorem minim enim minim sint quis adipisicing. Consequat dolore cupidatat nostrud ullamco eiusmod eu sint enim mollit est duis mollit eiusmod. Sit tempor sint nostrud deserunt sit irure reprehenderit exercitation duis qui anim aliqua ipsum exercitation. Id ex qui ea eu velit velit ad. Cillum deserunt ipsum proident laboris reprehenderit quis sunt.',
        createdNFTs: [],
        likedNFTs: [],
        shopCart: [],
    }
})

export const createNFTAction = (newNFT: NFTDataType): ThunkAction<void, RootState, null, ActionTypes> => async (dispatch) => dispatch({
    type: CREATE_NFT,
    payload: newNFT
})

export const likeNFTAction = (targetNFT: NFTDataType): ThunkAction<void, RootState, null, ActionTypes> => async (dispatch) => dispatch({
    type: LIKE_NFT,
    payload: targetNFT
})

export const addShopCartAction = (targetNFT: NFTDataType): ThunkAction<void, RootState, null, ActionTypes> => async (dispatch) => dispatch({
    type: ADD_SHOP_CART,
    payload: targetNFT
})