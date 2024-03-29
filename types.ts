export const GET_CURRENT_NFTS = "GET_CURRENT_NFTS";
export const GET_USER = "GET_USER";
export const CREATE_NFT = "CREATE_NFT";
export const LIKE_NFT = "LIKE_NFT";
export const EDIT_USER = "EDIT_USER";

// REDUX
export interface UserType {
  picture: any;
  username: string;
  email: string;
  biography: string;
  createdNFTs: NFTDataType[];
  likedNFTs: NFTDataType[];
  bids: BidType[];
  notifications: NotificationsType[];
}

export interface StateType {
  user: UserType;
  currentNFTs: NFTDataType[];
}

export interface NewUserType {
  username: string;
  biography: string;
  email: string;
  picture: any;
}

// ACTIONS
interface getCurrentNFTsAction {
  type: typeof GET_CURRENT_NFTS;
  payload: NFTDataType[];
}

interface getUserAction {
  type: typeof GET_USER;
  payload: UserType;
}

interface createNFTAction {
  type: typeof CREATE_NFT;
  payload: NFTDataType;
}

interface likeNFTAction {
  type: typeof LIKE_NFT;
  payload: NFTDataType;
}

interface editUser {
  type: typeof EDIT_USER;
  payload: NewUserType;
}

export type ActionTypes =
  | getCurrentNFTsAction
  | getUserAction
  | createNFTAction
  | likeNFTAction
  | editUser;

// DATA
export interface NotificationsType {
  readed: boolean;
  notificationImg?: any;
  title: string;
  subtitle: string;
  dateTime: string;
  buttonText?: string;
  nftImg?: any;
}

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
  Search: undefined;
  Trendings: undefined;
  Details: {
    data: NFTDataType | any;
    navigate: any;
  };
  User: {
    typeScreen: string;
  };
  CreateNFT: undefined;
  AddBid: undefined;
  UserSettings: undefined;
  Menu: undefined;
  Notifications: undefined;
};

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
  props?: any;
}

export interface IconInputProps {
  onChange: (input: string) => void;
}

export interface HeaderProps {
  onSearch?: (input: string) => void;
  text: string;
  menu?: boolean;
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
