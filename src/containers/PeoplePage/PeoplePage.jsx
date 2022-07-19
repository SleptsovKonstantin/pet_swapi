import React, { useState, useEffect } from "react";
import { getApiResourse } from "../../utils/network";
import { API_PEOPLE } from "../../constans/api";
import { getPeopleId } from "../../services/getPeopleData";

// import styles from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResourse = async (url) => {
    const res = await getApiResourse(url);

    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      console.log('ID in people ',id);
      return { name: name, url: url };
    });

    setPeople(peopleList);

    console.log("people", people);
  };

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return (
    <>
      {people && (
        <ul>
          {people.map(({ name, url }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PeoplePage;
