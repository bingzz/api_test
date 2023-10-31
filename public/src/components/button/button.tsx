import { ButtonProps } from "../../models/ButtonProps";
import './button.scss'

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.clickEvent}>{props.name}</button>
  );
}
