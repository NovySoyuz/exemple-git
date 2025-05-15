import React, { useEffect, useState } from 'react';

function BubbleSortComponent() {
    const [numbers, setNumbers] = useState([]);
    const numberOfArrayExponents = 5000;
    useEffect(() => {
        setNumbers([...Array(numberOfArrayExponents).keys()].map(() => Math.floor(Math.random() * numberOfArrayExponents)));
    }, []);

    const bubbleSort = () => {
        console.time('BubbleSort Time');
        // L'opérateur ... est utilisé pour décomposer les éléments d'un tableau. 
        // En l'utilisant à l'intérieur de crochets [...], on crée une copie superficielle du tableau numbers.
        // Cette fonction soustrait b de a // Si le résultat est négatif, a est trié avant b. // Si le résultat est positif, b est trié avant a. // Si le résultat est zéro, l'ordre de a et b reste inchangé.
        const sorted = [... numbers].sort((a, b) => a - b);
        console.timeEnd('BubbleSort Time');
        setNumbers(sorted);
    };  

    return (
        <div>
            <button onClick={bubbleSort}>Sort Numbers</button>
            <div>{numbers.join(', ')}</div>
        </div>
    );
}

export default BubbleSortComponent;