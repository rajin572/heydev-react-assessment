import React from 'react'

const AboutText = ({text}) => {
  const {question, answer} = text;
  console.log(text);
  return (
    <div className='my-5'>
        <h2 className=' text-[#6A2639] my-1 font-bold text-xl sm:text-2xl'>{question}</h2>
        <h2 className=' font-semibold'>
          {answer}
        </h2>
    </div>
  )
}

export default AboutText