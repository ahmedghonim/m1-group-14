export const variants = {
  style: {
    primary:
      "!bg-primary-100 !text-white !h-fit disabled:!opacity-25 hover:!bg-opacity-75",
    secondary:
      "!bg-dark-200 !text-white  disabled:!opacity-25 hover:!bg-opacity-75 hover:!bg-primary-100",
    transparent:
      "!text-primary-100 font-bold flex items-center justify-between !px-0",
    outline:
      "!text-primary-100 font-bold flex items-center justify-between !px-0 border-2 border-primary-100",
  },
  width: {
    full: "w-full flex-1",
    normal: "",
  },
  text: {
    center: "justify-center",
  },
  rounded: {
    full: "!rounded-full",
    default: "",
  },
  size: {
    xs: "!text-sm !px-2 !py-1",
    sm: "!text-sm !px-2  ",
    base: "md:!text-base !px-5",
    md: "!text-md h-10 px-3",
    lg: "px-8 font-bold",
  },
  font: {
    normal: "!font-normal",
    bold: "font-bold",
    semi: "!font-semibold",
    mid: "!font-medium",
  },
};
export type IconProps = "plus";

export const spinierVariants = {
  primary: "fill-white",
  secondary: "fill-white",
  transparent: "fill-primary-100",
  outline: "fill-primary-100",
};

export function IconRender(icon: IconProps) {
  switch (icon) {
    case "plus":
      return "p";
  }
}
export const mainClassName =
  "bg-transparent py-2 !px-4 rounded-lg w-fit whitespace-nowrap text-md flex gap-3 duration-300 items-center disabled:opacity-25 inline-block";

export interface Props {
  onClick?: () => void;
  form?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: CSSStyleSheet | any;
  children?: React.ReactNode | any;
  disabled?: boolean;
  id?: string;
  style?: keyof typeof variants.style;
  width?: keyof typeof variants.width;
  text?: keyof typeof variants.text;
  size?: keyof typeof variants.size;
  font?: keyof typeof variants.font;
  rounded?: keyof typeof variants.rounded;
  icon?: IconProps;
}
