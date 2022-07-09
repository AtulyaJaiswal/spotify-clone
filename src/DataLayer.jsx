import React, {createContext, useContext, useReducer} from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({initialState,reducer,children}) => (
    //similar to code in index.js, jisme children ko app waala component samaj lo
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}> 
        {children}
    </DataLayerContext.Provider>
);

//YE ISLIYE TAAKI JB BHI VALUE LENA HO YA KOI ACTION HO, TO YE ISKE THROUGH HOTA
export const useDataLayerValue = () => useContext(DataLayerContext);