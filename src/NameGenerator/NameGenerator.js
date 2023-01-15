import React from "react";
import { useState } from "react";
import "./NameGenerator.css";
import "../IdentityCard/IdentityCard.css";
import IdentityCard from "../IdentityCard/IdentityCard";
import CSV from "../CSV/CSV"

const NameGenerator = () => {

  const [persons, setpersons] = useState([]);

  const addNewPerson = async () => {
    const response = await fetch("https://randomuser.me/api");
    const result = await response.json();

    const NewPerson = result.results[0];
    setpersons(persons.concat([NewPerson]))
  }

  let [test, setTest] = useState(0);

  console.log({persons})

  const deletePerson = (id) => {
    console.log({id});
    setpersons(persons.filter((person) => person.login.uuid != id));
  }

  const Csv = (event) => {
    setTest(event.target.selectedIndex);
  }

  return (
    <>
    <h1>Générateur de noms</h1>

    <button className="addButton" onClick={addNewPerson}>Add name</button>
    <select className="aff" onChange={Csv}>
      <option selected>card</option>
      <option>CSV</option>
    </select>
    {test === 0 ? (
      <div className="cardGrid">
        {persons.map((person) => {
          return (
            <IdentityCard key={person.login.uuid} id={person.login.uuid} firstName={person.name.first} lastName={person.name.last} gender={person.gender} dateOfBirth={person.dob.date} imageUrl={person.picture.large} onDelete={deletePerson} />
          )
        })}
    </div>
    ):
    <div className="cardGrid">
      {persons.map((person) => {
        return(
         <CSV key={person.login.uuid} id={person.login.uuid} firstName={person.name.first} lastName={person.name.last} gender={person.gender} dateOfBirth={person.dob.date} imageUrl={person.picture.large} onDelete={deletePerson} />
          )
      })}
      </div>
    }
    </>
  );
};

export default NameGenerator