import { useController, useForm } from 'react-hook-form';
import FormGroup from './FormGroup';
import './style.css';
import ReactSelect from 'react-select';
const COUNTRY_OPTIONS = [
  { label: 'United States', value: 'US' },
  { label: 'India', value: 'IN' },
  { label: 'Mexico', value: 'MX' },
];

const FormOrA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  //
  const { field: countryField } = useController({
    name: 'country',
    control,
    rules: { required: { value: true, message: 'Required' } },
  });
  const onSubmit = (data) => {
    console.log(data);
    alert('success');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorMessage={errors?.email?.message}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          {...register('email', {
            required: { value: true, message: 'Required' },
            validate: (value) => {
              if (!value.endsWith('@gmail.com')) {
                return 'Must end with @gmail.com';
              }
            },
          })}
        />
      </FormGroup>
      <FormGroup errorMessage={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="input"
          type="password"
          {...register('password', {
            required: { value: true, message: 'Required' },
            minLength: { value: 10, message: 'Must be atleast 10 characters' },
            validate: {
              hasLowerCase: (value) => {
                if (!value.match(/[a-z]/)) {
                  return 'Must include at least 1 lowerCase';
                }
              },
              hasUpperCase: (value) => {
                if (!value.match(/[A-Z]/)) {
                  return 'Must include atleast 1 UpperCase';
                }
              },
              hasNumber: (value) => {
                if (!value.match(/[0-9]/)) {
                  return 'Must include one numeric character';
                }
              },
            },
          })}
        />
      </FormGroup>
      <FormGroup errorMessage={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          options={COUNTRY_OPTIONS}
          {...countryField}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormOrA;
