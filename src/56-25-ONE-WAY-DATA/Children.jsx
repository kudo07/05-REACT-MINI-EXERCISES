const Children = ({ toggle, setToggle }) => {
  return (
    <div>
      <button
        onClick={() => setToggle(toggle === 'dark' ? 'setToggle' : 'dark')}
      >
        {toggle}
      </button>
    </div>
  );
};

export default Children;
// now one way data is that the data is pass only through from the parent to child
//now we want to toggle the "toggle" we want it change from the setter function
// if we want to modifying from a child that affect parent we will use the function
// we pass down the deleteTodo and toggleTodo which modifies the ui into the parents so with
// the help of the function we modifies into the parent from the child
