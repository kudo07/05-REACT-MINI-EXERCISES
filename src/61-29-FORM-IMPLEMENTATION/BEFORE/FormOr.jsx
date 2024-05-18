import { useEffect, useRef } from 'react';
import './style.css';
import { useState } from 'react';
import { checkCountry, checkEmail, checkPassword } from './validation';
import FormGroup from './FormGroup';
import ReactSelect from 'react-select';
const COUNTRY_OPTIONS = [
  { label: 'United States', value: 'US' },
  { label: 'India', value: 'IN' },
  { label: 'Mexico', value: 'MX' },
];

const FormOr = () => {
  //   const [inp, setInp] = useState('');
  //
  const emialRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  useEffect(() => {
    console.log('render');
  });

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [countryErrors, setCountryErrors] = useState([]);
  //   useRef prevents the re-render and re-reun the whole code again
  // while giving the input
  const onSubmit = (e) => {
    e.preventDefault();
    const emailResults = checkEmail(emialRef.current.value);
    const passwordResults = checkPassword(passwordRef.current.value);
    const countryResults = checkCountry(countryRef.current.value);
    console.log(emialRef.current.value);
    setEmailErrors(emailResults);
    setPasswordErrors(passwordResults);
    setCountryErrors(countryResults);

    if (
      emailResults.length === 0 &&
      passwordResults.length === 0 &&
      countryResults.length === 0
    ) {
      alert('Success');
    }
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <FormGroup errors={emailErrors}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input className="input" type="email" id="email" ref={emialRef} />
      </FormGroup>
      {/* <label htmlFor="email" className="label">
        password
      </label>
      <input
        className="input"
        type="password"
        id="password"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        so the point is every time render when the state changes ref didnt make the render on every change
      /> */}
      <FormGroup errors={passwordErrors}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="input"
          ref={passwordRef}
        />
      </FormGroup>
      <FormGroup errors={countryErrors}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          ref={countryRef}
          options={COUNTRY_OPTIONS}
        />
      </FormGroup>
      <button className="btn" type="submit">
        submit
      </button>
    </form>
  );
};

export default FormOr;
