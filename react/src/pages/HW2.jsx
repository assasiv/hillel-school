import React from 'react';
import SingleCourseCard from '../components/SingleCourseCard';
import courses from '../data';

const HW2 = () => {
  return (
    <div>
      {courses.map((course) => (
        <SingleCourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default HW2;