import { Container } from "@shared/ui";
import AppSlider from "@widgets/slider/Slider";
import css from "./NewsPage.module.scss";
const NewsPage = () => {
  const slidesData = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/600x300",
      alt: "Slide 1",
      title: "Новости Недели",
      text: "Первая встреча с экспертами Intellect Market была проведена в субботу, 29 сентября в коворкинге Ololo Erkindik.",
      link: "#",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/600x300",
      alt: "Slide 2",
      title: "Новости Недели",
      text: "Другие новости на этой неделе...",
      link: "#",
    },
  ];

  const slides = slidesData.map((slide) => (
    <div className={css.slide_content} key={slide.id}>
      <img src={slide.imgSrc} alt={slide.alt} />
      <div className={css.slide_text}>
        <h3>{slide.title}</h3>
        <p>{slide.text}</p>
        <a href={slide.link}>Читать подробнее...</a>
      </div>
    </div>
  ));
  return (
    <Container>
      <AppSlider slides={slides} loop={true} autoplay={false} />
    </Container>
  );
};

export default NewsPage;
