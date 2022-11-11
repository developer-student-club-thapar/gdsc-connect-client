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

  let classes = "";
  switch (variant) {
    case BUTTON_VARIANT.PRIMARY:
      classes = "bg-blue-500 hover:bg-blue-600 text-white";
      break;
    case BUTTON_VARIANT.SECONDARY:
      classes =
        "border border-blue-400 bg-slate-600 hover:bg-slate-500 hover:bg-opacity-20 bg-opacity-20 text-blue-400";
      break;
    case BUTTON_VARIANT.TERTIARY:
      classes = "text-white hover:bg-slate-400 hover:bg-opacity-20 ";
      break;
    case BUTTON_VARIANT.PRIMARY_DANGER:
      classes = "bg-red-500 hover:bg-red-700 text-white";
      break;
    case BUTTON_VARIANT.DANGER:
      classes =
        "border border-red-500 bg-transparent hover:bg-red-700 text-red-500 hover:border-red-700 hover:text-white";
      break;
  }

  return (
    <button
      className={
        "p-3 px-16 rounded-full inline-flex h-min w-full flex-row items-center justify-center m-2 box-border text-lg " +
        classes +
        " " +
        className
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
