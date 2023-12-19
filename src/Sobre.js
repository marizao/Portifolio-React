import React from 'react';
// import Slider from 'react-slick';
import './Sobre.css';

export const Sobre = () => {
  const courses = [
    {
      title: 'Curso 1',
      description: 'Descrição do Curso 1.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Curso 2',
      description: 'Descrição do Curso 2.',
      image: 'https://via.placeholder.com/400x200',
    },
    // Adicione mais cursos conforme necessário
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="sobre">
      {/* <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="course-slide">
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </Slider> */}
    </div>
  );
};