import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { SelectCSV } from './selectCSV';

const width = 500;
const height = 500;

const linea = d3.line()
              .x((p) => p.x)
              .y((p) => p.y);

const Datos = ({ csvUrl }) => {
  const [datos, actualizaDatos ] = useState(null); 
  useEffect(() => {
    d3.csv(csvUrl).then(data => {
      let casos_diarios = [ ];
      console.log(data[752].nombre);
      for ( let i = 3 ; i < data.columns.length; i++) {
        casos_diarios[i -3] = { x:i-3, y:500-data[752][data.columns[i]]};
      }
      actualizaDatos(casos_diarios);
    });
  }, [csvUrl]); 
  return (<path d={(datos)?linea(datos):" "} strokeWidth={1} fill="none" stroke="red" />);        
};

function App() {
  const csvUrls = {
    Confirmados: 'db/Casos_Diarios_Municipio_Confirmados_20220508.csv',
    Negativos: 'db/Casos_Diarios_Municipio_Negativos_20220508.csv',
    Defunciones: 'db/Casos_Diarios_Municipio_Defunciones_20220508.csv'
  };
  const [csvData, setCsvData] = useState('Negativos');
  // console.log(csvUrls[csvData]);

  return (
    <>
    <SelectCSV setCsvData={setCsvData}/>
    <svg width={width} height={height} >
      <Datos csvUrl={csvUrls[csvData]}/>

    </svg>
    </>
  );
}

export default App;
