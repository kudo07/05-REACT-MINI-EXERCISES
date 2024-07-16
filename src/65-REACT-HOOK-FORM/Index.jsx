import React, { useState } from 'react';

const Index = () => {
  {
    console.log('ferw');
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, SetIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //
  const handleSubmit = async () => {
    e.preventDefault();
    SetIsSubmitting(true);
    if (password !== confirmPassword) {
      setErrors(['password adn confirm password must match']);
      SetIsSubmitting(false);
      return;
    }
    // Todo:submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    SetIsSubmitting(false);
  };

  //   the more i write in the email and password field the more
  // render happens
  {
    console.log(JSON.stringify(formData));
  }
  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => {
            <li key={error}>{error}</li>;
          })}
        </ul>
      )}
      <input
        onChange={handleChange}
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        type="password"
        id="password"
        required
        placeholder="Password"
      />
      <input
        id="confirm password"
        onChange={handleChange}
        type="password"
        required
        placeholder="password"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Index;
