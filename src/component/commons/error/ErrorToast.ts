import { useToast, immediateToast } from "izitoast-react";
import "izitoast-react/dist/iziToast.css";

const ErrorToast = (title:string,message:string,icon:string) => {
  useToast({ title: title, message: message, icon: icon, theme:'light'});
}

export default ErrorToast;
