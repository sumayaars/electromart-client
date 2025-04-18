import React from 'react'
import { useContext } from 'react'
import { ElectroContext } from '../ContextApi/Context';

export default function Home() {
  const {name} = useContext(ElectroContext);
  return (
   
    <div>
      <h1>i am from home {name}</h1>
    </div>
  )
}
