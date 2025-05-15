import React, { useState, useEffect } from 'react';

function InefficientSearchComponent({arrayLength}) {
    const generateSortedArray = () => Array.from({ length: arrayLength }, (_, index) => index + 1);
    const [sortedArray, setSortedArray] = useState(generateSortedArray());
    const [target, setTarget] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
    const generateSortedArray = () =>
      Array.from({ length: arrayLength }, (_, index) => index + 1);
    setSortedArray(generateSortedArray());
  }, [arrayLength]);

    const inefficientSearch = (arr, target) => {
        console.time('InefficientSearch Time');
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] === parseInt(target)) {
                console.timeEnd('InefficientSearch Time');
                return index;  // Retourne l'index de l'élément si trouvé
            }
        }
        console.timeEnd('InefficientSearch Time');
        return -1;  // Retourne -1 si l'élément n'est pas trouvé
    };

    const handleSearch = () => {
        const index = inefficientSearch(sortedArray, target);
        setResult(index >= 0 ? `Element found at index ${index}` : "Element not found");
    };

    return (
        <div>
            <h1>Inefficient Search Tester</h1>
            <input
                type="number"
                value={target}
                onChange={e => setTarget(e.target.value)}
                placeholder="Enter a number to search"
            />
            <button onClick={handleSearch}>Search</button>
            <p>{result}</p>
        </div>
    );
}

export default InefficientSearchComponent;
