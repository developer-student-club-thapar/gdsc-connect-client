import { Button } from "~/components/common/Button/Button";
import { BUTTON_VARIANT } from "~/components/common/Button/types";
import Sidenav from "~/components/Sidenav/";
import Tags from "~/components/common/Tags/Tags";
import Pfp from "~/components/Pfp/Pfp";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className=" flex flex-row w-screen overflow-hidden h-screen">
      {/* <Sidenav />
      <div>
        <h1 className="text-xl font-bold p-2 mt-2">Testing Buttons:</h1>
        <div className="flex flex-row">
          <Button variant={BUTTON_VARIANT.PRIMARY}>Test</Button>
          <Button variant={BUTTON_VARIANT.SECONDARY}>Test</Button>
          <Button variant={BUTTON_VARIANT.TERTIARY}>Test</Button>
          <Button variant={BUTTON_VARIANT.PRIMARY_DANGER}>Test</Button>
          <Button variant={BUTTON_VARIANT.DANGER}>Test</Button>
        </div>
        <p className="m-2 text-xl">Tags</p>
        <div className="flex flex-row">
          <Tags>Devops</Tags>
          <Tags>Frontend</Tags>
          <Tags>Backend</Tags>
        </div>
        <p className="m-2 text-xl">Pfps</p>
        <div className="flex flex-row">
          <Pfp imageSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" />
          <Pfp imageSrc="https://i.pinimg.com/736x/fa/c1/ea/fac1ea989fa111b1a848616ea6204f4e.jpg" />
          <Pfp imageSrc="https://wallpapercave.com/uwp/uwp2633526.png" />
          <Pfp />
        </div>
      </div> */}
      <div>
        <h1 className="text-3xl font-bold p-2 mt-2">
          Welcome to the home page!
        </h1>
        <Link to="/auth/login">
          <Button variant={BUTTON_VARIANT.PRIMARY}>Login</Button>
        </Link>
        <Link to="/auth/register">
          <Button variant={BUTTON_VARIANT.PRIMARY}>Register</Button>
        </Link>
      </div>
    </div>
  );
}
