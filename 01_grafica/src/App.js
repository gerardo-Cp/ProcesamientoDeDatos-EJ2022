import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const width = 500;
const height = 500;

const csvUrl = 'db/Casos_Diarios_Municipio_Confirmados_20220407.csv';

const linea = d3.line()
              .x((p) => p.x)
              .y((p) => p.y);

const Datos = () => {
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
  }, []); 
  return (<path d={(datos)?linea(datos):" "} strokeWidth={1} fill="none" stroke="red" />);        
};

function App() {
  return (
    <svg width={width} height={height} >
      <Datos />

    </svg>
  );
}

export default App;
