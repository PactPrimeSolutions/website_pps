import { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 100) {
          card.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardsData = [
    {
      title: 'Business Process Outsourcing (BPO)',
      icon: '/bpo.png',
      description: 'We offer scalable and intelligent solutions to manage complex business operations for your organization.',
      moreText: 'Our BPO services are designed to streamline your operations and reduce costs while maintaining high levels of quality and compliance.'
    },
    {
      title: 'Title & Settlement Services',
      icon: '/settlement.png',
      description: 'We offer title and settlement services and assist title agents across various transactions ranging from fresh purchases to new loans.',
      moreText: 'Our team is experienced in handling a variety of transactions, ensuring smooth and efficient processes for our clients.'
    },
    {
      title: 'Mortgage Services',
      icon: '/morgage.png',
      description: 'With our domain expertise, we optimize your volumes and enable you to adapt to rapidly shifting regulations across geographies for your business.',
      moreText: 'We provide customized mortgage solutions that align with the latest industry standards and regulatory requirements.'
    },
    {
      title: 'Training and Consultancy',
      icon: '/training.png',
      description: 'We provide flexible training and consultancy services executed by domain experts to upgrade your staff in their professional growth or assist in complex projects.',
      moreText: 'Our consultancy services are tailored to your needs, helping your organization achieve its strategic goals.'
    },
    {
      title: 'Knowledge Process Outsourcing (KPO)',
      icon: '/kpo.png',
      description: 'Obtain a highly skilled and seasoned workforce without the hassle of hiring for your specialized projects.',
      moreText: 'Our KPO services provide you with access to specialized expertise, allowing you to focus on your core business activities.'
    },
    {
      title: 'Business Growth',
      icon: '/BGrowth.png',
      description: 'A highly skilled professional provides solutions and ensures exceptional results are achieved for your business growth.',
      moreText: 'We work closely with you to understand your business goals and provide tailored solutions that drive growth.'
    },
    {
      title: 'Technology Services',
      icon: '/technology.png',
      description: 'At the forefront of innovation, our technology and services offer cutting-edge solutions tailored to meet the unique needs of businesses across industries. ',
      moreText: 'Our expert team provides 24/7 support, ensuring that your business stays ahead in a rapidly evolving digital landscape. Whether you are looking to streamline workflows, implement advanced technologies, or secure your data, our comprehensive services deliver the results you need to succeed.'
    }
  ];

  return (
    <div className="cards-section">
      <h2 className="heading">
        <span className="brand">PactPrime </span>is available 24/7 to provide our solutions and ensure exceptional results are achieved for your
        <span className="customers"> business growth.</span>
      </h2>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={index} className={`card ${index === cardsData.length - 1 ? 'horizontal-card' : ''}`}>
            <div className="icon">
              <img src={card.icon} alt={card.title} className="icon-img" />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {expandedCard === index && <p className="more-text">{card.moreText}</p>}
            <button 
              className="know-more" 
              onClick={() => toggleExpand(index)}>
              {expandedCard === index ? 'Show less' : 'Know more'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
