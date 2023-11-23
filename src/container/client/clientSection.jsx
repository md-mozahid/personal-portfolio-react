// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import Pagination1 from '../../components/pagination'
import SingleClient from './singleClient'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { clientsData } from '../../data/clientData'

const ClientSection = () => {
  return (
    <div className="max-w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          Client Feedback
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {clientsData.map((item, index) => (
          <SwiperSlide key={index}>
            <SingleClient item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Pagination1 />
    </div>
  )
}

export default ClientSection
