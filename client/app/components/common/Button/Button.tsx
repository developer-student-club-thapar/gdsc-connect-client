import { ButtonComponentProps, BUTTON_VARIANT } from "./types";

export function Button(props: ButtonComponentProps) {
  const {
    variant = BUTTON_VARIANT.PRIMARY,
    children,
    className,
    endIcon: EndIcon,
    startIcon: StartIcon,
    onClick,
    disabled,
    ...rest
  } = props;

  const isLightBackground =
    variant === BUTTON_VARIANT.SECONDARY ||
    variant === BUTTON_VARIANT.TERTIARY ||
    variant === BUTTON_VARIANT.DANGER;

  const classes = "";

  return (
    <button
      className={
        "p-4 rounded-full flex flex-row items-center justify-center m-2" +
        classes
      }
      disabled={disabled}
      {...(!disabled && { onClick })}
      {...rest}
      style={rest.style}
    >
      {!!StartIcon && <span className={""}>{StartIcon}</span>}
      {children}
      {!!EndIcon && <span className={""}>{EndIcon}</span>}
    </button>
  );
}
