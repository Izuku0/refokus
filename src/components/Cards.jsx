import React from 'react'
import Card from './Card'
const Cards = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
            <Card width={"basis-1/3"} start={false} para={true} heading="Culture" sub="Who are we"/>
            <Card width={"basis-2/3"} start={true} para={false} hover="true" heading="Get in Touch" sub={`Let's get to it,Together`} />
        </div>
    </div>
  )
}

export default Cards