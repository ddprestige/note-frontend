import React from 'react'
import SubjectCard from '../components/card'

const page = () => {
  return (
    <div>
  <div className="max-w-screen-xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
        <SubjectCard 
  subjectName="Alchemy" 
  subjectCode="Textbook" 
  downloadLink="https://drive.google.com/file/d/1-qPf0HyDXH6mDhbrcPFZhHaFHjJ48BsO/view?usp=sharing"
/>
        <SubjectCard 
  subjectName="BCA Hindi" 
  subjectCode="Textbook" 
  downloadLink="https://drive.google.com/file/d/1-m6py_YvX_E4yaJPSpfHUv_ESpn4XYt7/view?usp=sharing"
/>
   
  </div>
</div>
    </div>
  )
}

export default page