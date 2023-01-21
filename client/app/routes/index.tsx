import { Button } from "~/components/common/Button/Button";
import { BUTTON_VARIANT } from "~/components/common/Button/types";
import Sidenav from "~/components/Sidenav/";
import Tags from "~/components/common/Tags/Tags";

export default function Index() {
  return (
    <div className=" flex flex-row w-screen overflow-hidden h-screen">
      <Sidenav />
      <div>
        <h1 className="text-xl font-bold p-2 mt-2">Testing Buttons:</h1>
        <div className="flex flex-row">
          <Button variant={BUTTON_VARIANT.PRIMARY}>Test</Button>
          <Button variant={BUTTON_VARIANT.SECONDARY}>Test</Button>
          <Button variant={BUTTON_VARIANT.TERTIARY}>Test</Button>
          <Button variant={BUTTON_VARIANT.PRIMARY_DANGER}>Test</Button>
          <Button variant={BUTTON_VARIANT.DANGER}>Test</Button>
        </div>
        <div className="flex flex-row">
          <Tags>Devops</Tags>
          <Tags>Frontend</Tags>
          <Tags>Backend</Tags>
        </div>
      </div>
    </div>
  );
}
