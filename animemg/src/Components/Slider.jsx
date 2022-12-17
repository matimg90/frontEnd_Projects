// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={150}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      autoplay={true}
      autoHeight={true}
    >
      <SwiperSlide><img src="https://media.vandalsports.com/master/5-2022/2022524153313_1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9daa2f17d7ad2727d72fdeaae6e232de.jpeg" alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slider;