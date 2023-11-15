import React from 'react';
import CourseCardItems from '../components/SingleCourseCard';
import courses from '../data';

const HW2 = () => {
  return (
    <div>
      {courses.map((course) => (
        <CourseCardItems key={course.id} course={course} />
      ))}
    </div>
  );
};

export default HW2;