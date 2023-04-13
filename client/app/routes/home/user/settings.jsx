import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useState } from "react";
import Password from "../../../components/Settings/PasswordChange";
import General from "../../../components/Settings/General";
import Socials from "../../../components/Settings/Socials";

function Settings() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div className="z-0">
        <img
          src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-tobi-620337.jpg&fm=jpg"
          alt="scenery"
          className="w-full h-56 object-cover z-0"
        />
        <div className="z-100 relative">
          <div className="flex">
            <div className="w-32 h-32 object-cover rounded-full  -mt-12 ml-8  border-2 border-black bg-white">
              {/* profile pic */}
              <img
                src="https://avatars.githubusercontent.com/u/68650149?v=4"
                alt="scenery"
                className="w-full h-full object-cover rounded-full z-10"
              />
            </div>
            {/* name */}
            <div className="flex flex-col ml-4 pt-4">
              <p className="font-semibold text-2xl">Darshan Patel</p>
              <p className="font text-gray-500">darshpat01@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="pt-4 px-4">
          <Tabs onChange={(index) => setTabIndex(index)}>
            <TabList>
              <Tab>My Details</Tab>
              <Tab>Password</Tab>
              <Tab>Socials</Tab>
            </TabList>
            <TabPanels p="2rem">
              <TabPanel>
                <General />
              </TabPanel>
              <TabPanel>
                <Password />
              </TabPanel>
              <TabPanel>
                <Socials />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Settings;
