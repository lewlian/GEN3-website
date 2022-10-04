import { SocialEnums } from "../enum";
import BeatbotsLogo from "../../public/assets/projects/beatbots.svg";
import ParallaxLogo from "../../public/assets/projects/parallax.svg";
import PropertyLogo from "../../public/assets/projects/property.svg";
import ArgoFinanceLogo from "../../public/assets/projects/argofinance.svg";
import CleuLogo from "../../public/assets/projects/cleu.png";
import ZootiezLogo from "../../public/assets/projects/zootiez.png";
import TiloLogo from "../../public/assets/projects/tilo.png";
import EthNYCLogo from "../../public/assets/ethglobal/eth_nyc.svg";
import EthSeoulLogo from "../../public/assets/ethglobal/eth_seoul.svg";
import EthAmsterdamLogo from "../../public/assets/ethglobal/eth_amsterdam.svg";
import EthHackMoneyLogo from "../../public/assets/ethglobal/eth_hackmoney.svg";
import EthHackFSLogo from "../../public/assets/ethglobal/eth_hackfs.svg";
import MorpheusLogo from "../../public/assets/ethglobal/morpheus_labs.svg";

export const NFTProjects = [
  {
    title: "Beatbots",
    image: BeatbotsLogo,
    socials: [
      {
        type: SocialEnums.TWITTER,
        link: "https://twitter.com/TheBeatBots",
      },
      {
        type: SocialEnums.OPENSEA,
        link: "https://opensea.io/collection/beatbotsgenesis",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://www.thebeatbots.xyz/",
      },
    ],
  },
  {
    title: "Parallax",
    image: ParallaxLogo,
    socials: [
      {
        type: SocialEnums.TWITTER,
        link: "https://twitter.com/TheParallaxHQ",
      },
      {
        type: SocialEnums.OPENSEA,
        link: "https://opensea.io/collection/theparallaxgenesis",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://theparallax.com/",
      },
    ],
  },
  {
    title: "Property's",
    image: PropertyLogo,
    socials: [
      {
        type: SocialEnums.TWITTER,
        link: "https://twitter.com/propertys_nft",
      },
      {
        type: SocialEnums.OPENSEA,
        link: "https://opensea.io/collection/propertysofficial",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://propertys.xyz/",
      },
    ],
  },
];

export const DefiProjects = [
  {
    title: "Argo Finance",
    image: ArgoFinanceLogo,
    socials: [
      {
        type: SocialEnums.TWITTER,
        link: "https://twitter.com/ArgoProtocol",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://www.argofinance.money/",
      },
    ],
  },
];

export const HackathonProjects = [
  {
    title: "PEW",
    hackathon: "ETHNYC",
    image: EthNYCLogo,
    socials: [
      {
        type: SocialEnums.SUBMISSION,
        link: "https://github.com/FloorGangETHNYC",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://pew-frontend.vercel.app/",
      },
    ],
  },
  {
    title: "GAAVE",
    hackathon: "ETHSeoul",
    image: EthSeoulLogo,
    socials: [
      {
        type: SocialEnums.SUBMISSION,
        link: "https://devfolio.co/projects/gaave-6df3",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://gaave-ui.herokuapp.com/",
      },
    ],
  },
  {
    title: "SafeZen",
    hackathon: "HackMoney",
    image: EthHackMoneyLogo,
    socials: [
      {
        type: SocialEnums.SUBMISSION,
        link: "https://github.com/SafeZen",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://safezen.vercel.app/",
      },
    ],
  },
  {
    title: "Unblogged",
    hackathon: "HackFS",
    image: EthHackFSLogo,
    socials: [
      {
        type: SocialEnums.SUBMISSION,
        link: "https://github.com/Unblogg",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://unblogged.eth.link/",
      },
    ],
  },
  {
    title: "GIV3",
    hackathon: "Morpheus Labs Hackathon",
    image: MorpheusLogo,
    socials: [
      {
        type: SocialEnums.SUBMISSION,
        link: "https://github.com/Giv3rs",
      },
    ],
  },
  {
    title: "NiftyRewards",
    hackathon: "ETHAmsterdam",
    image: EthAmsterdamLogo,
    socials: [
      {
        type: SocialEnums.SUBMISSION,
        link: "https://github.com/Giv3rs",
      },
      {
        type: SocialEnums.WEBSITE,
        link: "https://www.niftyr3wrds.com/",
      },
    ],
  },
];
