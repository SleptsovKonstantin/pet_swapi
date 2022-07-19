import { HTTPS, SWAPI_ROOT,SWAPI_PEOPLE } from "../constans/api";

const getId = (url, category) => {
  console.log('url', url);
  const id = url.replace(HTTPS+SWAPI_ROOT+category, '');
  console.log("id in function",id);
  return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);
