import Card from './Card';
import Carousel from "react-spring-3d-carousel";

const Cards = () => {

  const slides = [
    {
      key: '1',
      content: <Card />,
    },
    {
      key: '2',
      content: <Card />,
    },
    {
      key: '3',
      content: <Card />,
    },
    {
      key: '4',
      content: <Card />,
    },
    {
      key: '5',
      content: <Card />,
    },
    {
      key: '6',
      content: <Card />,
    },
    {
      key: '7',
      content: <Card />,
    },
    {
      key: '8',
      content: <Card />,
    },
  ]

  return (
    <div style={{ width: '80%', height: '500px', margin: '0 auto' }}>
      <Carousel slides={slides} showNavigation={true}/>
    </div>
  );
};

export default Cards;