import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">; // When putting 'input it gives us all the props related to input

function Input({ id, label, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
export default Input;
