import { SocialEnums } from "../enum";
import BeatbotsLogo from "../../public/assets/projects/beatbots.svg";
import ParallaxLogo from "../../public/assets/projects/parallax.svg";
import PropertyLogo from "../../public/assets/projects/property.svg";
import ArgoFinanceLogo from "../../public/assets/projects/argofinance.svg";
import UULogo from "../../public/assets/projects/uu.svg";
import ShogunLogo from "../../public/assets/projects/shogunsamurai.svg";
import CleuLogo from "../../public/assets/projects/cleu.png";
import ZootiezLogo from "../../public/assets/projects/zootiez.png";
import TiloLogo from "../../public/assets/projects/tilo.png";
import EthNYCLogo from "../../public/assets/ethglobal/eth_nyc.svg";
import EthSeoulLogo from "../../public/assets/ethglobal/eth_seoul.svg";
import EthAmsterdamLogo from "../../public/assets/ethglobal/eth_amsterdam.svg";
import EthHackMoneyLogo from "../../public/assets/ethglobal/eth_hackmoney.svg";
import EthHackFSLogo from "../../public/assets/ethglobal/eth_hackfs.svg";
import MorpheusLogo from "../../public/assets/ethglobal/morpheus_labs.svg";
import EthMexicoLogo from "../../public/assets/ethglobal/eth_mexico.svg";

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
  // {
  //   title: "Uninterested Unicorns",
  //   image: UULogo,
  //   socials: [
  //     {
  //       type: SocialEnums.TWITTER,
  //       link: "https://twitter.com/U_UnicornsNFT",
  //     },
  //     {
  //       type: SocialEnums.OPENSEA,
  //       link: "https://opensea.io/collection/ununicornsofficial",
  //     },
  //     {
  //       type: SocialEnums.WEBSITE,
  //       link: "https://uunicorns.io/",
  //     },
  //   ],
  // },
  // {
  //   title: "ShogunS侍murais",
  //   image: ShogunLogo,
  //   socials: [
  //     {
  //       type: SocialEnums.TWITTER,
  //       link: "https://twitter.com/ShogunSamurais",
  //     },
  //     {
  //       type: SocialEnums.OPENSEA,
  //       link: "https://opensea.io/collection/shogunsamurais",
  //     },
  //     {
  //       type: SocialEnums.WEBSITE,
  //       link: "https://shogunsamurais.com/",
  //     },
  //   ],
  // },
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
    title: "Woosh",
    hackathon: "ETHMexico",
    image: EthMexicoLogo,
    socials: [
      {
        type: SocialEnums.GITHUB,
        link: "https://ethglobal.com/showcase/woosh-pu1fn",
      },
    ],
  },
  {
    title: "PEW",
    hackathon: "ETHNYC",
    image: EthNYCLogo,
    socials: [
      {
        type: SocialEnums.GITHUB,
        link: "https://ethglobal.com/showcase/pew-pza8i",
      },
    ],
  },
  {
    title: "GAAVE",
    hackathon: "ETHSeoul",
    image: EthSeoulLogo,
    socials: [
      {
        type: SocialEnums.GITHUB,
        link: "https://devfolio.co/projects/gaave-6df3",
      },
    ],
  },
  {
    title: "SafeZen",
    hackathon: "HackMoney",
    image: EthHackMoneyLogo,
    socials: [
      {
        type: SocialEnums.GITHUB,
        link: "https://showcase.ethglobal.com/hackmoney2022/safezen-rjwh7",
      },
    ],
  },
  {
    title: "Unblogged",
    hackathon: "HackFS",
    image: EthHackFSLogo,
    socials: [
      {
        type: SocialEnums.GITHUB,
        link: "https://ethglobal.com/showcase/unblogged-nih1q",
      },
    ],
  },
  {
    title: "GIV3",
    hackathon: "Morpheus Labs Hackathon",
    image: MorpheusLogo,
    socials: [
      {
        type: SocialEnums.GITHUB,
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
        type: SocialEnums.GITHUB,
        link: "https://showcase.ethglobal.com/ethamsterdam/niftyrewards-mu1yz",
      },
    ],
  },
];
