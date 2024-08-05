import React, { useEffect } from 'react';

// Definerer komponenten
function Logger() {
  // useEffect hook'en kører efter hver render
  useEffect(() => {
    console.log('Komponenten er blevet renderet');

  });

  
}

export default Logger;
