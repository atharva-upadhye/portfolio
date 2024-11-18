import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...cv: ClassValue[]) => twMerge(clsx(...cv));

export const twColor = {
  button: {
    dark: {
      active: "dark:bg-[rgb(30,30,30)]",
      hover: "dark:hover:bg-[rgb(50,50,50)]",
      idle: "dark:bg-[rgb(70,70,70)]",
      bg: "dark:bg-[rgb(90,90,90)]",
    },
    light: {
      active: "bg-[rgb(160,160,160)]",
      hover: "hover:bg-[rgb(180,180,180)]",
      idle: "bg-[rgb(210,210,210)]",
      bg: "bg-[rgb(230,230,230)]",
    },
  },
  a: {
    dark: "dark:text-blue-400",
    light: "text-blue-800",
  },
  chip: {
    dark: "dark:bg-[rgb(50,50,50)]",
    light: "bg-[rgb(210,210,210)]",
  },
};
export const defaultClassName = {
  a: cn(
    twColor.a.light,
    twColor.a.dark,
    "hover:underline min-h-[24px] min-w-[24px]"
  ),
  button: (isActive?: boolean) =>
    cn(
      "flex items-center justify-center rounded-lg p-3 text-black dark:text-white",
      twColor.button.light.hover,
      twColor.button.dark.hover,
      isActive
        ? cn(twColor.button.light.active, twColor.button.dark.active)
        : cn(twColor.button.light.idle, twColor.button.dark.idle)
    ),
};
