import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const phoneRegex = new RegExp("(559)[0-9-]{13,14}");
const schema = {
    nombre:yup.string(),
    Direccion: yup.string().required("Escribe una direccion"),
    Telefono: yup.string().matches(phoneRegex, "Ingrese un numero valido"),
    Descripcion:yup.string(),
}


export const schemaFormCart = yup.object({
    Direccion:schema.Direccion,
    Descripcion: schema.Descripcion,
    Telefono: schema.Telefono,
}).required();

