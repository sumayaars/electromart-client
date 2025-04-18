import React, { createContext } from 'react'
 export const ElectroContext = createContext(null);

export default function Context({children}) {
    const data={
        name:'test',
    }
  return (
   <ElectroContext.Provider value={data}>
      {children}
   </ElectroContext.Provider>
  )
}
