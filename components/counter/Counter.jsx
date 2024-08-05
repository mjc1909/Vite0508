import React, { useState } from 'react';

// Definerer komponenten
function Counter() {
  // Initialiserer state med en startværdi på 0
  const [count, setCount] = useState(0);

  // Funktion der håndterer knaptryk
  const handleClick = () => {
    setCount(count + 1); // Opdaterer state ved at tilføje 1 til den nuværende count
  };

  return (
    <div>
      <p>Du har klikket {count} gange</p>
      <button onClick={handleClick}>Klik mig</button>
    </div>
  );
}

export default Counter;
