import { ThunkAction } from "redux-thunk/es/types";
import { NFTData } from "../constants";
import {
  ActionTypes,
  CREATE_NFT,
  EDIT_USER,
  GET_CURRENT_NFTS,
  GET_USER,
  LIKE_NFT,
  NewUserType,
  NFTDataType,
  UserType,
} from "../types";
import { RootState } from "./Store";

export const getCurrentNFTs =
  (): ThunkAction<void, RootState, null, ActionTypes> => async (dispatch) =>
    dispatch({
      type: GET_CURRENT_NFTS,
      payload: NFTData,
    });

export const getUserAction =
  (user: UserType): ThunkAction<void, RootState, null, ActionTypes> =>
  async (dispatch) =>
    dispatch({
      type: GET_USER,
      payload: user,
    });

export const createNFTAction =
  (newNFT: NFTDataType): ThunkAction<void, RootState, null, ActionTypes> =>
  async (dispatch) =>
    dispatch({
      type: CREATE_NFT,
      payload: newNFT,
    });

export const likeNFTAction =
  (targetNFT: NFTDataType): ThunkAction<void, RootState, null, ActionTypes> =>
  async (dispatch) =>
    dispatch({
      type: LIKE_NFT,
      payload: targetNFT,
    });

export const editUserAction =
  (newUserData: NewUserType): ThunkAction<void, RootState, null, ActionTypes> =>
  async (dispatch) =>
    dispatch({
      type: EDIT_USER,
      payload: newUserData,
    });
