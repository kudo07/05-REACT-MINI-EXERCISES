import { useArray } from './useArray';

const INITIAL_ARRAY = [1, 2, 3];
const UseArrayHook = () => {
  const { array, push, replace, filter, remove, clear, reset } =
    useArray(INITIAL_ARRAY);
  return (
    <div>
      <div>{array.join(', ')}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
          alignItems: 'flex-start',
          marginTop: '1rem',
        }}
      >
        <button onClick={() => push(4)}>Push 4</button>
        <button onClick={() => replace(2, 10)}>
          replace2nd Index with 10 value
        </button>
        <button onClick={() => filter((n) => n < 3)}>
          {/* these are invoking with the parameters */}
          keep number less than 3
        </button>

        <button onClick={() => remove(1)}> Remove second element</button>
        <button onClick={() => clear()}>Clear</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default UseArrayHook;
