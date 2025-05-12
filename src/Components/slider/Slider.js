import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// present code 
import {  RichText } from '@wordpress/block-editor';
import { updateData } from '../../utils/functions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"
const Slider = ({ attributes,isShow,setAttributes }) => {
  const { sliders, icon ,effect,autoPlay,arrowButton,showPagination,interrogation,wrap,keybord} = attributes;
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
  },[])
  useEffect(() => {
    AOS.refresh();
  }, [attributes]);

  return (
    <Carousel
    pause={interrogation?"hover":false}
    controls={arrowButton}
    indicators={showPagination}
    slide={true}
    fade={effect==="fade"?true:false}
    touch={true}
    
   keyboard={keybord}
    className='caroselWrapper vertical-carousel'
      wrap={wrap} 
      prevIcon={
        <span  style={{ position:"relative", zIndex: '3' }}
          className='icon prev'
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      } 
      nextIcon={
        <span style={{position:"relative",zIndex:"3"}}
          className='icon'
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      } 
      interval={autoPlay?.enabled?autoPlay?.interval:autoPlay?.time} 
      // pause={"hover"}
      
    >
      {sliders.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
          className='caroselContainer'
           
          >
            {/* Image with Overlay */}
            <img
              className='d-block w-100'
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
            <div
            className='overly'
             
            ></div>

            {/* Caption */}
            <Carousel.Caption
            className='caption'
             
             
            >    {!isShow && <RichText   className='sliderTitle' placeholder='title...' value={slide.title} onChange={(value)=>{
              setAttributes({
                sliders: updateData(sliders, value,index,"title")
              
              })

            }}></RichText> }
              { isShow && <h3 data-aos="fade-in" className='sliderTitle'>{slide.title}</h3>}
              {!isShow && <RichText  className='sliderDescription' placeholder='description...' value={slide.desc} onChange={(value)=>{
              setAttributes({
                sliders: updateData(sliders, value,index,"desc")
              
              })

            }}></RichText> }
              { isShow && <p  className='sliderDescription'>{slide.desc}</p>}

             {slide?.buttonTest && isShow && <button className='buttonAnchore'  ><a className='buttonLink' href='https://www.google.com/' target={slide?.new?"_jkfdjgklfd":"_self"} >{slide?.buttonTest}</a></button>}

             { !isShow && <button className='buttonAnchore'  ><RichText   tagName='a' placeholder='button...' value={slide?.buttonTest} onChange={(value)=>{
              setAttributes({
                sliders: updateData(sliders, value,index,"buttonTest")
              
              })
             }} className='buttonLink' ></RichText></button>}
              
              
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
