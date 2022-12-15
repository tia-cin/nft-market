export const GET_CURRENT_NFTS = 'GET_CURRENT_NFTS';
export const GET_USER = 'GET_USER'
export const CREATE_NFT = 'CREATE_NFT'
export const LIKE_NFT = 'LIKE_NFT'

// REDUX
export interface UserType {
    picture: string,
    username: string,
    email: string,
    biography: string,
    createdNFTs: NFTDataType[],
    likedNFTs: NFTDataType[]
}

export interface StateType {
  user: UserType,
  currentNFTs: NFTDataType[]
}

// ACTIONS
interface getCurrentNFTsAction {
  type: typeof GET_CURRENT_NFTS,
  payload: NFTDataType[]
}

interface getUserAction {
  type: typeof GET_USER,
  payload: UserType
}

interface createNFTAction {
  type: typeof CREATE_NFT,
  payload: NFTDataType
}

interface likeNFTAction {
  type: typeof LIKE_NFT,
  payload: NFTDataType
}

export type ActionTypes = getCurrentNFTsAction | getUserAction | createNFTAction | likeNFTAction 
// DATA
export interface NFTDataType {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: BidType[];
  like: boolean;
}

export interface BidType {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
}

// NAVIGATION
export type NavigateProps = {
  Landing: undefined;
  Auth: undefined;
  Home: undefined;
  Details: {
    data: NFTDataType | any;
    navigate: any;
  };
  User: undefined;
  CreateNFT: undefined,
};

export type UserNavigationTypes = {
  UserNFTs: undefined,
  LikedNFTs: undefined,
  Bids: undefined
}

// COMPONENTS
export interface NFTTitleProps {
  title: string;
  subtitle: string;
  titleSize: number;
  subtitleSize: number;
}

export interface EthPriceProps {
  price: number;
}

export interface ImageCmpProps {
  imgUrl: any;
  index: number;
}

export interface InputsProps {
  value: string;
  onChange: (input: string) => void;
}

export interface IconInputProps {
  onChange: (input: string) => void;
}

export interface HomeHeaderProps {
  onSearch: (input: string) => void;
}

export interface DetailsDescProps {
  data: NFTDataType;
}

export interface RectButtonProps {
  props?: any;
  handlePress?: () => void;
  text: string;
}

export interface CircleButtonProps {
  imgUrl: any;
  props?: any;
  handlePress?: () => any;
}

export interface FocusStatusBarProps {
  background: string;
  props?: any;
}
