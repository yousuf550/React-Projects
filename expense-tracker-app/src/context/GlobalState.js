import React, { createContext, useReducer } from "react";

//Initial state
const initialState = {
    transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Flower", amount: -20 },
        { id: 3, text: "Flower", amount: -20 },
        { id: 4, text: "Flower", amount: -20 }
    ]
}

//Create context
export const GlobalContext = createContext(initialState)