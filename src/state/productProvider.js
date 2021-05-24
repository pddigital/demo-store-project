import React, { useState, createContext } from "react";
import mattresses from '../mattresses.json';

const mattressesArray = Object.keys(mattresses.mattresses).map(mattress => {
  return mattresses.mattresses[mattress];
})

const initialState = {
  products: mattressesArray,
  selectedProduct: mattressesArray[0]
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(initialState.selectedProduct);
  const [products] = useState(initialState.products);

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
