import axios from "axios";

const ROOT_API = import.meta.env.VITE_ROOT_API;

export async function getProjects() {
  try {
    const url = `${ROOT_API}/projects`;
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    throw error;
  }
}
