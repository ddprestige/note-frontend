import React from 'react'
import SubjectCard from '../components/card'

const page = () => {
  return (
    <div>
  <div className="max-w-screen-xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
        <SubjectCard 
  subjectName="BCU" 
  subjectCode="MATH101" 
  downloadLink="https://drive.google.com/file/d/1-NhMmRww9v6zveZVs-GvDE1pWI4fw2ds/view?usp=sharing"
/>
        <SubjectCard 
  subjectName="Hindi" 
  subjectCode="MATH101" 
  downloadLink="https://drive.google.com/file/d/1-NhMmRww9v6zveZVs-GvDE1pWI4fw2ds/view?usp=sharing"
/>
        <SubjectCard 
  subjectName="Math" 
  subjectCode="MATH101" 
  downloadLink="https://drive.google.com/file/d/1-NhMmRww9v6zveZVs-GvDE1pWI4fw2ds/view?usp=sharing"
/>
  </div>
</div>
    </div>
  )
}

export default page