import { jsPDF } from 'jspdf';
import { useState } from 'react';

function Table() {
  const jspdf = new jsPDF('p', 'pt', 'letter');
  const [val1, setVal1] = useState('');
  const handleChange = (e) => {
    setVal1(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target.txt.value;

    const data = {
      callback: function (jspdf) {
        jspdf.save('demo.pdf');
      },
      margin: [10, 10, 10, 10],
      autoPaging: 'text',
    };

    jspdf.html(val + ' ' + val1, data);
    // jspdf.html(val1, data);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea name="txt" /> <br />
        <input type="text" value={val1} onChange={handleChange} />
        <br />
        <button>Generate</button>
      </form>
    </>
  );
}
export default Table;
