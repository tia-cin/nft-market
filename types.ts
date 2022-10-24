export interface NFTDataType {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: BidType[];
}

export interface BidType {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
}

export type NavigateProps = {
  Landing: undefined;
  Auth: undefined;
  Home: undefined;
  Details: {
    data: NFTDataType;
  };
  User: undefined;
};
