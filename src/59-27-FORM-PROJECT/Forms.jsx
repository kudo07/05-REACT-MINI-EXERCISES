import { useMemo, useState } from 'react';
import { checkEmail, checkPassword } from './validation';

const Forms = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);
  //
  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);
  //
  const passwordErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPassword(password) : [];
  }, [isAfterFirstSubmit, password]);
  //
  function onSubmitt(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);
    //
    const emailResults = checkEmail(email);
    const passwordResults = checkPassword(password);
    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert('Success');
    }
  }
  const functionToggle = () => {
    setToggle(() => {
      return !toggle;
    });
  };
  //
  return (
    <form onSubmit={onSubmitt} className="form">
      <div className={`form-group ${emailErrors.length > 0 ? 'error' : ''}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(', ')}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? 'error' : ''}`}>
        <label htmlFor="password" className="label">
          PASSWORD:
        </label>
        <input
          type={toggle ? 'text' : 'password'}
          className="input"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(', ')}</div>
        )}
        <button type="button" onClick={functionToggle}>
          {toggle ? 'hide' : 'show'}
        </button>
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Forms;
