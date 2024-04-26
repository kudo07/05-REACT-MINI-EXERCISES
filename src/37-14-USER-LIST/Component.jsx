const Component = ({ key, name, email, phone, username }) => {
  // every single prop that the user have
  return (
    <li key={key}>
      {name} {email}
      {phone}
      {username}
    </li>
  );
  // for    return <li>{name}</li>
};

export default Component;
