import "./IdentityCard.css"

const IdentityCard = ({firstName, lastName, gender, dateOfBirth, imageUrl, id, onDelete}) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="Person-Card">
      <img
      src={imageUrl}
      alt={fullName}
      className="Person-image"
      />
      <div className="Person-data">
        <b>{fullName}</b>
        <br />
        {gender == "female" ? "Femme" : "Homme"}
        <br />
        {new Date(dateOfBirth).toLocaleDateString()}
        <br />
        <button
        onClick={() => {
          onDelete(id);
        }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default IdentityCard