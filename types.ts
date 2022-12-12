// REDUX
export interface StateType {
  user: {
    shopCart: NFTDataType[] | null,
    picture: string,
    username: string,
    email: string,
    biography: string,
    createdNFTs: NFTDataType[] | null,
    likedNFTs: NFTDataType[] | null
  } | null,
  currentNFTs: NFTDataType[]
}
// DATA
export interface NFTDataType {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: BidType[];
  like: boolean
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
  ShopCart: undefined,
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
