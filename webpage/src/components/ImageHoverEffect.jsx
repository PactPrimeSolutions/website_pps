import React, { useEffect, useRef } from 'react';
import './ImageHoverEffect.css'; // Link to your custom CSS

const ImageHoverEffect = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the card is visible
    });

    imageRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const images = [
    {
      src: '/img5.jpg',
      title: 'Strong focus on data security and compliance',
      description: 'Pactprime understands the importance of data security and ensures that the data for every process we take care of for your organization is safely managed as per relevant compliance procedures.',
    },
    {
      src: '/img2.jpg',
      title: 'End-to-end solutions across outsourcing services and consulting',
      description: 'No more hassle of managing multiple vendors for BPO, KPO, training & consultancy and mortgage/title/settlement services as Pactprime can be your one-stop solution.',
    },
    {
      src: '/img1.jpg',
      title: '24X7 tailored solutions for your business',
      description: 'Pactprime is aware that every business model will have different processes. We work closely with your organization’s team to develop custom solutions for your business requirements round the clock.',
    },
    {
      src: '/img4.jpg',
      title: 'We understand your business Requirement',
      description: 'Pactprime strives to create a constant learning environment that ensures we are not just an outsourcing firm, but a partner in your organization’s growth story.',
    }
  ];

  return (
    <>
      <h2 className='heading1'>WHY CHOOSE US?</h2>
      <div className="image-hover-container">
        {images.map((image, index) => (
          <div 
            key={index} 
            ref={el => imageRefs.current[index] = el} 
            className="image-hover-item-wrapper"
          >
            <div className="image-hover-item">
              <img src={image.src} alt={image.title} className="image-hover-img" />
            </div>
            <h2 className="image-hover-title">{image.title}</h2>
            <p className="image-hover-description">{image.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageHoverEffect;
