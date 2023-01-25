//Importacion yup
import * as Yup from "yup";

//Declaramos las reglas 
const emailRules =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  export const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo invalido")
      .required("Correo obligatorio")
      .matches(emailRules, "Correo no cumple los requisitos"),
    password: Yup.string()
      .min(8, "No cumple caracteres minimos")
      .required("Password necesaria")
      .matches(passwordRules, "Password no cumple con los requisitos"),
    firstname: Yup.string().required("Nombre obligatorio"),
    lastname: Yup.string().required("Apellido obligatorio"),
    username: Yup.string().required("Username necesario"),
  });