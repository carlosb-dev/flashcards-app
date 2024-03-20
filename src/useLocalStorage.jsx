import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = useState(initialValue);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        try {
          const itemsFromStorage = localStorage.getItem(itemName);
          let parsedItem;
    
          if (!itemsFromStorage) {
            parsedItem = initialValue;
            localStorage.setItem(itemName, JSON.stringify(parsedItem));
        
          } else {
            parsedItem = JSON.parse(itemsFromStorage);
            setItem(parsedItem); 
          }

          console.log("ok");
    
          setLoading(false);
        } catch(error) {
            console.log("no");
          setError(true);
          setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        item,
        loading,
        error
    };
}

export default useLocalStorage;