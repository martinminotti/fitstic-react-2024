//componente che quando si monta fa partire un interval che quando si mostra fa comparire un componente incrementale
import { useState, useEffect } from 'react';

export default function IncrementalComponent() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setValue(value => value + 1);
    }, 1000); // Intervallo di 1 secondo

    return () => clearInterval(intervalRef);
  }, []);

  return <div>Il tempo scorre. {value}</div>;
}