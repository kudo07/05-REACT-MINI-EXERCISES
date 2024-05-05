import { jsPDF } from 'jspdf';

function Table() {
  const jspdf = new jsPDF('p', 'pt', 'letter');

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

    jspdf.html(val, data);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea name="txt" /> <br />
        <button>Generate</button>
      </form>
    </>
  );
}
export default Table;
