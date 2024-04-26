const Solution = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      My name is {name} and I am {age} years old.
    </div>
  );
};

export default Solution;
