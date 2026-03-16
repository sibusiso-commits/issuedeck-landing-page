import type { JSX } from "solid-js";

import { cx } from "~/lib/utils";

type ButtonProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button(props: ButtonProps) {
  const variant = () => props.variant ?? "primary";

  return (
    <a
      {...props}
      class={cx(
        "button",
        variant() === "secondary" && "button-secondary",
        variant() === "ghost" && "button-ghost",
        props.class
      )}
    />
  );
}
