import React from 'react'
import Child from './Child';

const Parent = () => {
    const name ="Kartik Kumar";
    const property ="4 bigha highway wala zameen";
  return (
    <>
    <div>Parent</div>
    <h1>{name}</h1>
    <Child property={property}/>
    </>
  )
}

export default Parent