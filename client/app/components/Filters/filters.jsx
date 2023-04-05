import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import Checkbox1 from "../common/Checkbox1";

function filters() {
  return (
    <>
      <div className="border-solid rounded-lg border-[1px] border-gray-400 ">
        <Accordion allowMultiple defaultIndex={0}>
          <AccordionItem border="none">
            <h2>
              <AccordionButton>
                <p className="font-semibold">Experience Level</p>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="flex flex-col">
                <Checkbox1 text="Internship" />
                <Checkbox1 text="Entry-level" />
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={0}>
          {" "}
          <AccordionItem border="none">
            <h2>
              <AccordionButton>
                <p className="font-semibold">Job Type</p>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="flex flex-col">
                <Checkbox1 text="Remote" />
                <Checkbox1 text="On-site" />
                <Checkbox1 text="Hybrid" />
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={0}>
          <AccordionItem border="none">
            <h2>
              <AccordionButton>
                <p className="font-semibold">Work Style</p>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="flex flex-col">
                <Checkbox1 text="Full-time" />
                <Checkbox1 text="Part-time" />
                <Checkbox1 text="Internship" />
                <Checkbox1 text="Contract" />
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default filters;
