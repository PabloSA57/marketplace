import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const phoneRegex = new RegExp("(381)[0-9-]{7,7}");
const stringRegex = new RegExp("^[A-z]+$");
const passwordregExpr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
const schema = {
    Nombre:yup.string("Solo letra").matches(stringRegex
    , "Nombre no valido").required("Escribe tu nombre"),
    Nombre_Del_Kiosko:yup.string().required("Escribe el nombre de tu kiosko"),
    Apellido: yup.string("Solo letra").matches(stringRegex, "Apellido no valido").required("Escribe tu apellido"),
    Email: yup.string().email("Escribe un email valido").required("Escribe un email por favor"),
    Contraseña: yup.string(),
    Direccion: yup.string().required("Escribe una direccion"),
    Telefono: yup.string().matches(phoneRegex, "Ingrese un numero valido").min(10, 'min10').max(10, 'max10'),
    Descripcion:yup.string(),
}


export const schemaFormCart = yup.object({
    Direccion:schema.Direccion,
    Descripcion: schema.Descripcion,
    Telefono: schema.Telefono,
}).required();

export const schemaLogin = yup.object({
    Email: schema.Email,
    Contraseña: schema.Contraseña,

}).required();

export const schemaRegister = yup.object({
    Nombre: schema.Nombre,
    Apellido: schema.Apellido,
    Email: schema.Email,
    Contraseña: schema.Contraseña,

}).required();

export const schemaRegisterStore = yup.object({
    Nombre: schema.Nombre,
    Nombre_Del_Kiosko: schema.Nombre_Del_Kiosko,
    Apellido: schema.Apellido,
    Email: schema.Email,
    Telefono: schema.Telefono,
    Contraseña: schema.Contraseña,
    Direccion:schema.Direccion,
}).required();

