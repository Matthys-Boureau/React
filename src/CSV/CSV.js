const CSV = ({firstName, lastName, gender, dateOfBirth, id, onDelete}) => {
  const fullName = `${firstName} ${lastName}`;
  return(
  <div className="Person-data">
        <p>{fullName}</p>
        {gender == "female" ? "Femme" : "Homme"}
        {new Date(dateOfBirth).toLocaleDateString()}
        <button
        onClick={() => {
          onDelete(id);
        }}
        >
          Supprimer
        </button>
    </div>
  );
}

export default CSV