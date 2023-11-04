import clsx from "clsx";
import React from "react";

export const textVariants = {
  color: {
    primary: "!text-primary-100",
    dark: "!text-dark-100",
    gray: "!text-dark-400",
    red: "!text-error-100",
  },
  font: {
    normal: "!font-normal",
    bold: "font-bold",
    semi: "!font-semibold",
    mid: "!font-medium",
  },
  size: {
    null: '',
    heading: '!text-[28px] xl:!text-[32px]',
    normal: '!text-sm md:!text-base',
    xs: '!text-xs',
    sm: 'md:!text-sm !text-xs', //14px
    md: 'md:!text-xl !text-base', //20px
    xl: 'text-3xl'
  }
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: any;
  as?: React.ElementType;
  className?: string;
  size?: keyof typeof textVariants.size;
  color?: keyof typeof textVariants.color;
  font?: keyof typeof textVariants.font;
}

function Text({
  className,
  as,
  size = "null",
  color = "dark",
  font = "normal",
  children,
}: Props) {
  const Component = as ?? "span";
  return (
    <Component
      className={clsx(
        "dark:text-[#fff] text-dark-100 text-center gap-3",
        textVariants.font[font],
        textVariants.size[size],
        textVariants.color[color],
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Text;
