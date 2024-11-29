
import Achievment from '@/components/Achievment/Achievment';
import Category from '@/components/Category/Category';
import Courses from '@/components/Courses/Courses';
import Hearo from '@/components/Hearo/Hearo';
import OurTeam from '@/components/OurTeam/OurTeam';


import Testimonials from '@/components/Testimonials/Testimonials';
import React from 'react'


function Home() {
  return (
    <>
      <Hearo/>
      <Category/>
      <Achievment/>
      <br />
       <Achievment/>
      <Courses/>
      
       <OurTeam/>
      <Testimonials/>
      
    </>
  )
}

export default Home ;
