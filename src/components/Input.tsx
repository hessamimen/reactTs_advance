import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">; // When putting 'input it gives us all the props related to input

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});
export default Input;
