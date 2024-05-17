import { useRef, useState } from 'react';
import { checkEmail, checkPassword } from './validation';

const StateRef = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [toggle, setToggle] = useState(false);
  //
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isAfterFirstSubmit, setIsAfterSubmit] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setIsAfterSubmit(true);
    const emialResults = checkEmail(emailRef.current.value);
    const passwordResults = checkPassword(passwordRef.current.value);
    setEmailErrors(emialResults);
    setPasswordErrors(passwordResults);
    if (emialResults.length === 0 && passwordResults.length === 0) {
      alert('success');
    }
  };
  const functionToggle = (e) => {
    setToggle(() => {
      return !toggle;
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className={`form-group ${emailErrors.length > 0 ? 'error' : ''}`}>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="input"
          ref={emailRef}
          onChange={
            isAfterFirstSubmit
              ? (e) => setEmailErrors(checkEmail(e.target.value))
              : undefined
          }
        />
        {emailErrors.length > 0 ? (
          <div className="msg">{emailErrors.join(', ')}</div>
        ) : (
          ''
        )}
      </div>
      <div className={`from-group ${passwordErrors.length > 0 ? 'error' : ''}`}>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type={toggle ? 'text' : 'password'}
          id="password"
          ref={passwordRef}
          className="input"
          onChange={
            isAfterFirstSubmit
              ? (e) => setPasswordErrors(checkPassword(e.target.value))
              : undefined
          }
        />
        {passwordErrors.length > 0 ? (
          <div className="msg">{passwordErrors.join(',')}</div>
        ) : (
          ''
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

export default StateRef;
