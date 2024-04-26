import React, { useState } from 'react';

const List = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'item-1' },
    { id: 2, name: 'item-2' },
  ]);
  const addItem = () => {
    setItems((currentItems) => {
      return [{ id: 3, name: 'New item' }, ...currentItems];
    });
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
      {/* when we render the array then the each element is rendered by the react so
      object also it tries to render each but due to object it didnt then gives an error
      */}
      {/*there are 2 ways to return   */}
      {/* 1 */}
      {/* {items.map((item, id) => {
        return <div key={id}>{item.name}</div>;
      })} */}
      {/*  */}
      {/* 2 */}
      {items.map((item, id) => (
        <div key={id}>
          {item.name}
          <input type=" " />
        </div>
        // if we dont use key react didnt know which input are we write on
        //  the key must be actual unique for the instance
      ))}
    </div>
  );
};

export default List;
