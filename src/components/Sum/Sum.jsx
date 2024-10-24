// export const Sum = () => ();
import React from 'react';

function Sum({ a = 0, b = 0 }) {
  const sum = a + b;

  return (
    <div>
      <h1>Soma</h1>
      <p>A soma de {a} e {b} é {sum}</p>
    </div>
  );
}

export default Sum; // Exportação padrão
