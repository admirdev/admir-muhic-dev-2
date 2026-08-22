import axios from "axios";

const ROOT_API = import.meta.env.VITE_ROOT_API;

export async function sendContactEmail(contactData) {
    try {
        const url = `${ROOT_API}/contact`;
        const res = await axios.post(url, contactData);

        return res.data;
    } catch (error) {
        throw error;
    }
}