import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never } & {
  children: ReactNode;
};
type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
}
export default Button;
