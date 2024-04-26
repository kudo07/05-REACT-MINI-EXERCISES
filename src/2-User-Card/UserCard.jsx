const UserCard = ({ name, age, number }) => {
  return (
    <div className="container">
      <h1 className="heading">Name:{name}</h1>
      <h3>age:{age}</h3>
      <h3>Phone Number:{number}</h3>
    </div>
  );
};

export default UserCard;
