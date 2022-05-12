export const SelectCSV = ({ setCsvData }) =>{

  const onChangeValue = (event) => {
    // console.log(event.target.value);
    setCsvData(event.target.value);
  }

  return (
    <div className="radio-group" onChange={onChangeValue}>
      <span>
      <p>Tipo de Caso</p>
      <input type="radio" value="Confirmados" name="casos" /> Confirmados <br/>
      <input type="radio" value="Negativos" name="casos" /> Negativos <br/>
      <input type="radio" value="Defunciones" name="casos" /> Defunciones <br/>
      </span>
    </div>
  );
};