
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function ImageSlider() {
  return (
    <>
      <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
          <img 
            src="/images/berlin.png" 
            alt="Imagem de Berlin" 
            className="w-full h-96 object-cover" l
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/teste2.png" 
            alt="Teste 2" 
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/teste.png" 
            alt="Teste"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default ImageSlider;