import axios from "axios";

const Configure = () => {

    const pruebaLink = async () => {
        console.log('dentro')

        document.cookie = 'po=pablo; path=/; domain=localhost:3001';
        let x = document.cookie;
        console.log(x)
    }
    return (
        <div>
        {/*/ <a href="https://auth.mercadopago.com/authorization?client_id=3623746131554031&response_type=code&platform_id=mp&state=AUTORIZACION&redirect_uri=http://localhost:3001/mercadopago/redirect">s</a>*/}
        <button onClick={pruebaLink}>prueba</button>
        </div>
    )
}

export default Configure;
