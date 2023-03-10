import {
  code4renaUrl,
  diamondUrl,
  furucomboUrl,
  imTokenUrl,
  lyraUrl,
  perpetualUrl,
  quantstampUrl,
  tpeUrl,
  appWorksUrl,
  tenderlyUrl,
} from "./urls";

import diamond from "@/public/images/diamond.png";
import code4Rena from "@/public/images/code4Rena.png";
import furucombo from "@/public/images/furucombo.png";
import imToken from "@/public/images/imToken.png";
import lyra from "@/public/images/lyra.png";
import perpetual from "@/public/images/perpetual.png";
import quantstamp from "@/public/images/quantstamp.png";
import tpe from "@/public/images/taipei-ethereum.png";
import appWorks from "@/public/images/appWorks.png";
import tenderly from "@/public/images/tenderly.png";

import { StaticImageData } from "next/image";

type OrganizerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
};

const organizers: OrganizerProps[] = [
  { name: "AppWorks", url: appWorksUrl, logo: appWorks },
  { name: "code4Rena", url: code4renaUrl, logo: code4Rena },
  { name: "diamond protocol", url: diamondUrl, logo: diamond },
  { name: "furucombo", url: furucomboUrl, logo: furucombo },
  { name: "imToken", url: imTokenUrl, logo: imToken },
  { name: "lyra", url: lyraUrl, logo: lyra },
  { name: "perpetual", url: perpetualUrl, logo: perpetual },
  { name: "quantstamp", url: quantstampUrl, logo: quantstamp },
  { name: "Taipei Ethereum Meetup", url: tpeUrl, logo: tpe },
  { name: "Tenderly", url: tenderlyUrl, logo: tenderly },
];

export default organizers;
