import React from 'react'

const Heading = ({text,className}) => {
    // console.log(text.split(''));

    text.split(' ').map(item => {
        // console.log(item);
        // console.log(item.includes('#'));
        if (item.includes('#')) {
            let arr=item.split('')
            arr.pop()
            arr.shift()
            console.log(arr.join(''));
            
        }
        
    })

  return (
    <h1 className={`${className}`}>{text}</h1>
  )
}

export default Heading