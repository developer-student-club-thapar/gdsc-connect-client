import { ButtonHTMLAttributes } from "react";

export enum BUTTON_VARIANT {
  PRIMARY = "primary", // default, filled bg, white text
  SECONDARY = "secondary", // border, transparent bg, colored text
  TERTIARY = "tertiary", // no border, transparent bg, colored text, bg on hover
  PRIMARY_SUCCESS = "primarySuccess",
  PRIMARY_DANGER = "primaryDanger",
  DANGER = "danger",
}

export interface ButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  variant?: BUTTON_VARIANT;
  children?: React.ReactNode;
}
