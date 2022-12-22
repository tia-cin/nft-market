import assets from "./assets";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const userNFT = [
  {
    like: true,
    image: assets.nft08,
    name: "Roman Coin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2.54,
    id: "NFT-32",
    creator: "Full Name",
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    like: false,
    image: assets.nft09,
    name: "Space Diamond",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 5.52,
    id: "NFT-28",
    creator: "Full Name",
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    like: false,
    image: assets.nft10,
    name: "Testing Game #2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2.37,
    id: "NFT-11",
    creator: "Full Name",
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    like: true,
    image: assets.nft11,
    name: "Abstracto #208",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 1.74,
    id: "NFT-09",
    creator: "Full Name",
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    like: true,
    image: assets.nft12,
    name: "Rabit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 8.49,
    id: "NFT-08",
    creator: "Full Name",
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
];

const NFTData = [
  {
    like: false,
    id: "NFT-01",
    name: "Abstracto #312",
    creator: "Putri Intan",
    price: 4.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-02",
    name: "Green Coins",
    creator: "Siti Nurhaliza",
    price: 7.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-03",
    name: "NFT coins race",
    creator: "Elisabeth aho",
    price: 95.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-04",
    name: "Nifty NFT",
    creator: "Putri Intan",
    price: 54.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-05",
    name: "Colorful circles",
    creator: "David doe",
    price: 10.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-06",
    name: "Black box model",
    creator: "Leo Messi",
    price: 20.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft06,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-07",
    name: "Abstracto soulful art",
    creator: "Victor de la Cruz",
    price: 18.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.",
    image: assets.nft07,
    bids: [
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-13",
    name: "Graffitti",
    creator: "Noah Senki",
    price: 38.43,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft13,
    bids: [
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-14",
    name: "New Nature on Earth",
    creator: "Tora Sana",
    price: 38.43,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft14,
    bids: [
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-05",
    name: "Abstract #454",
    creator: "David Poe",
    price: 49.95,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: assets.nft15,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-68",
    name: "Facing Watefall",
    creator: "Putri Intan",
    price: 54.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: assets.nft16,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-66",
    name: "ETH Domination",
    creator: "Eathan Rin",
    price: 51.53,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: assets.nft17,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-18",
    name: "Abstract #545",
    creator: "David doe",
    price: 18.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft18,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 10:10 PM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-19",
    name: "Mermaid",
    creator: "David doe",
    price: 26.65,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft19,
    bids: [
      {
        id: "BID-15",
        name: "Jessica Den",
        price: 30.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 AM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-35",
    name: "Face",
    creator: "David Kylyan",
    price: 10.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft20,
    bids: [
      {
        id: "BID-92",
        name: "Jessica Tan",
        price: 10.35,
        image: assets.person02,
        date: "December 12, 2019 at 11:10 AM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-53",
    name: "Baby War",
    creator: "KidEight",
    price: 16.53,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft21,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 18.25,
        image: assets.person02,
        date: "December 12, 2019 at 01:16 PM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-67",
    name: "Tech Knit",
    creator: "David doe",
    price: 11.75,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft22,
    bids: [
      {
        id: "BID-51",
        name: "Revecca Tan",
        price: 13.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-52",
    name: "Eve & The Snake",
    creator: "Adams Ky",
    price: 10.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft23,
    bids: [
      {
        id: "BID-72",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 02:10 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-95",
    name: "Astronaunt Eye",
    creator: "David doe",
    price: 28.54,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft24,
    bids: [
      {
        id: "BID-16",
        name: "Rotation Kim",
        price: 30.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-66",
    name: "Arcangels",
    creator: "Pedro Rems",
    price: 12.5,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft25,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 05:10 AM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-05",
    name: "Faceless",
    creator: "Karen Diaz",
    price: 10.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft26,
    bids: [
      {
        id: "BID-71",
        name: "Liam Weber",
        price: 10.75,
        image: assets.person02,
        date: "December 12, 2019 at 08:10 PM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-05",
    name: "Abstract #756",
    creator: "David doe",
    price: 20.65,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft27,
    bids: [
      {
        id: "BID-17",
        name: "Jessica Tan",
        price: 20.75,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 AM",
      },
    ],
  },
  {
    like: true,
    id: "NFT-84",
    name: "Cat ETH",
    creator: "Katy Liams",
    price: 31.65,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft28,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 40.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 35.65,
        image: assets.person02,
        date: "December 12, 2019 at 10:10 AM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-77",
    name: "Abstract #326",
    creator: "David doe",
    price: 50.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft29,
    bids: [
      {
        id: "BID-05",
        name: "Jessica Tan",
        price: 70.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jeniffer Willen",
        price: 60.15,
        image: assets.person02,
        date: "December 13, 2019 at 12:15 AM",
      },
    ],
  },
  {
    like: false,
    id: "NFT-32",
    name: "Donut",
    creator: "Dave Poe",
    price: 19.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft30,
    bids: [
      {
        id: "BID-21",
        name: "Tamara Rid",
        price: 27.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-61",
        name: "Kim Limanda",
        price: 20.55,
        image: assets.person02,
        date: "December 12, 2019 at 19:10 PM",
      },
      {
        id: "BID-18",
        name: "Jessy Recca",
        price: 19.25,
        image: assets.person02,
        date: "December 12, 2019 at 10:10 PM",
      },
    ],
  },
];

const notificationsData = [
  {
    readed: false,
    notificationImg: assets.person04,
    title: "Lia Fier",
    subtitle: "followed you",
    dateTime: "7 Jun 2022, 11:34 AM",
    buttonText: "Follow",
  },
  {
    readed: false,
    notificationImg: assets.person04,
    title: "Lia Fier",
    subtitle: "Liked your NFT",
    dateTime: "7 Jun 2022, 11:34 AM",
    nftImg: assets.nft07,
  },
  {
    readed: false,
    notificationImg: assets.person02,
    title: "Mei Key",
    subtitle: "followed you",
    dateTime: "7 Jun 2022, 11:34 AM",
    buttonText: "Follow",
  },
  {
    readed: true,
    notificationImg: assets.eth,
    title: "ETH Recieved",
    subtitle: "0.00032 ETH recieved",
    dateTime: "7 Jun 2022, 11:34 AM",
    buttonText: "My balance",
  },
  {
    readed: true,
    notificationImg: assets.person03,
    title: "Mimi Fer",
    subtitle: "followed you",
    dateTime: "7 Jun 2022, 11:34 AM",
    buttonText: "Follow",
  },
  {
    readed: true,
    notificationImg: assets.person03,
    title: "Mimi Fer",
    subtitle: "Liked your NFT",
    dateTime: "7 Jun 2022, 11:34 AM",
    nftImg: assets.nft27,
  },
];

const userInfo = {
  username: "Lizy Terry",
  picture: assets.user,
  email: "lizyterry@email.com",
  biography:
    "Cupidatat ea qui nostrud aliquip magna mollit et quis anim exercitation dolor voluptate sit. Incididunt reprehenderit officia adipisicing incididunt in ad ullamco Lorem minim enim minim sint quis adipisicing.",
  createdNFTs: userNFT,
  likedNFTs: NFTData.filter((nft) => nft.like),
  bids: [
    {
      id: "BID-11",
      name: "Lizzy Terry",
      price: 4.25,
      image: assets.person01,
      date: "December 12, 2019 at 12:10 PM",
    },
    {
      id: "BID-31",
      name: "Lizzy Terry",
      price: 7.25,
      image: assets.person01,
      date: "December 10, 2019 at 12:15 PM",
    },
    {
      id: "BID-15",
      name: "Lizzy Terry",
      price: 2.65,
      image: assets.person01,
      date: "December 10, 2019 at 12:20 PM",
    },
    {
      id: "BID-19",
      name: "Lizzy Terry",
      price: 9.35,
      image: assets.person01,
      date: "December 10, 2019 at 12:25 PM",
    },
    {
      id: "BID-04",
      name: "Lizzy Terry",
      price: 6.2,
      image: assets.person01,
      date: "December 12, 2019 at 12:10 PM",
    },
    {
      id: "BID-24",
      name: "Lizzy Terry",
      price: 3.1,
      image: assets.person01,
      date: "December 12, 2019 at 12:15 PM",
    },
  ],
};

export { NFTData, userNFT, userInfo, months, notificationsData };
