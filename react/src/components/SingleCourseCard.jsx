import React from 'react';
import './SingleCourseCard.css';

const CourseCardItems = ({ course }) => {
    const {
      image,
      level,
      title,
      user,
      rating,
      students,
      modules,
      finishedModules,
      duration,
      isMyCourse
    } = course;
    
    return (
      <div className="card">
        <div className="image__container">
          <img src={image} alt="" />
          <div className="level">{level}</div>
        </div>
        <h3 className="card__title">{title}</h3>
  
        <div className="card__info">
          <div className="user">
            <img src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
          </div>
          <div className="rating">
            <p>{rating}</p>
          </div>
        </div>
  
        {isMyCourse ? (
          <div>
            <progress value={finishedModules} max={modules}>
              {Math.floor((finishedModules / modules) * 100)}%
            </progress>
            <div className="card__info">
              <p>{finishedModules} / {modules} Modules</p>
              <div>{Math.floor((finishedModules / modules) * 100)}%</div>
            </div>
          </div>
        ) : (
          <div className="card__info">
            <div>{students} Students</div>
            <div>{modules} Modules</div>
            <div>{duration} mins</div>
          </div>
        )}
      </div>
    );
};

export default CourseCardItems;