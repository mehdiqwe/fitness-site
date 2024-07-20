import { ClassesInfo } from "@/constants/classesInfo"
import HText from "@/shared/HText"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Class from "./Class"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {setSelectedPage: (value: SelectedPage) => void}

const OurClasses = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
          <div className="md: w-3/5">
            <HText>
              Our Classes
            </HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        {isAboveMediumScreens ? (
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            className="w-5/6 mt-10"
          >
            <ul>
              {ClassesInfo.map((item, index) => 
                <SwiperSlide>
                  <Class key={`${item.name}-${index}`} item={item}/>
                </SwiperSlide>
              )}
            </ul>
          </Swiper>
          ) : (
          <Swiper
            slidesPerView={1}
            className="w-5/6 mt-10"
          >
            <ul>
              {ClassesInfo.map((item, index) => 
                <SwiperSlide>
                  <Class key={`${item.name}-${index}`} item={item}/>
                </SwiperSlide>
              )}
            </ul>
          </Swiper>
        )}
      </motion.div>
    </section>
  )
}

export default OurClasses