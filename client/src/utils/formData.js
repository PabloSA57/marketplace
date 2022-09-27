import axios from "axios";

class Uploadservice{

    
    async sendFile(name, file, lat, lon) {
        const form = new FormData();

        form.append('name', name)
        form.append('lat', lat)
        form.append('lon', lon)
        form.append('file', file, 'form-data')

        const headers = {
            "to": ""
        }

        return await axios.post('http://localhost:3001/posteo', form, {headers: headers})
    }
}

export default new Uploadservice();