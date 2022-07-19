import axios from "axios";

export const getApiResourse = async (url) => {
  try {
    const res = await axios(url);
    return res.data;
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
}
