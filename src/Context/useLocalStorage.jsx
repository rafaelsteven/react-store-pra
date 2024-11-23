import React, { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);

  useEffect(() => { // Cambiado a `useEffect` directamente
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem);
    }
  }, [itemName]); // Asegúrate de incluir dependencias correctas

  const saveItem = (itemName,newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
  };
}

export { useLocalStorage };
