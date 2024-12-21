
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
          <img 
            src="/images/berlin/1.jpg"
            alt="Imagem de Berlin" 
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/berlin/2.jpg"
            alt="Imagem de Berlin" 
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/berlin/3.jpg"
            alt="Imagem de Berlin" 
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/berlin/4.jpg"
            alt="Imagem de Berlin" 
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/berlin/5.jpg"
            alt="Imagem de Berlin" 
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover" 
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default ImageSlider;