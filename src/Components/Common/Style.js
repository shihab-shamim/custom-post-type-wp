import { getBoxCSS ,getBorderBoxCSS,getTypoCSS} from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { iconsStyle ,iconRadius,indicator,activeIndicator,indicatoRadius,indicatorBorder,innerGap,containerHeigh,contentAlignment,direction,indicatorPosition,overlyColor,slideMargin,sliderRadius,titleTypho,titleColor,titlePadding,desTypho,descolor,desPadding,titleAnimation,desAnimation,buttonColor,buttonPadding,buttonRadius,buttonBorder,buttonColorhO,buttonBorderHo} = attributes;

	const mainSl = `#${id}`;
	const icon = `${mainSl} .icon`;
	const prev = `${mainSl} .prev`;
	const sliderTitle = `${mainSl} .sliderTitle`;
	const sliderDescription = `${mainSl} .sliderDescription`;
  const possition=()=>{
    if(indicatorPosition === "top"){
      return 'top:-440px;'
    }
    if(indicatorPosition === "bottom"){
      return 'bottom:0px;'
    }
  }
  // ${getTypoCSS('', dynamicStyle)?.googleFontLink}
  // ${getTypoCSS(typho, dynamicStyle)?.styles}
  

	return <style dangerouslySetInnerHTML={{
 
		__html: `
       ${getTypoCSS('', titleTypho)?.googleFontLink}
       ${getTypoCSS('', desTypho)?.googleFontLink}
    ${getTypoCSS(sliderTitle, titleTypho)?.styles}
    ${getTypoCSS(sliderDescription, desTypho)?.styles}
     .buttonAnchore{
		
		background-color: ${buttonColor?.bgColor};
		padding: ${getBoxCSS(buttonPadding)};
    border-radius: ${getBoxCSS(buttonRadius)};
   ${getBorderBoxCSS(buttonBorder)}

	 }
     .buttonAnchore .buttonLink{
		
		color: ${buttonColor?.color};
	 }
    .buttonAnchore:hover{
    background-color:${buttonColorhO?.bgColor};
    ${getBorderBoxCSS(buttonBorderHo)}
    }
    .buttonAnchore:hover .buttonLink{
    color:${buttonColorhO?.color};
    }
	

		${sliderTitle}{
    color:${titleColor};
    padding:${getBoxCSS(titlePadding)};
    font-size:${titleTypho?.fontSize?.desktop}!important;
    }
    ${sliderDescription}{
    color:${descolor};
    margin:${getBoxCSS(desPadding)}!important;
    }
		${icon},.icon svg{
		width: ${iconsStyle?.width};
		height: ${iconsStyle?.height};
		fill: ${iconsStyle?.color};
		background-color:${iconsStyle?.bg};
		border-radius: ${getBoxCSS(iconRadius)}
		
		}
		${prev}{
		transform: scaleX(-1);
		display: inline-block;
		
		}
		
		.carousel-indicators [data-bs-target] {
		width:${indicator?.width}!important; 
		height: ${indicator?.height}!important;
		background-color:${indicator?.color};
		border-radius: ${getBoxCSS(indicatoRadius)}
		
	}
		.carousel-indicators .active {
		width:${activeIndicator?.width}!important; 
		height: ${activeIndicator?.height}!important;
		background-color:${activeIndicator?.color};
		${getBorderBoxCSS(indicatorBorder)}
		
		
		}
		.d-block{
		height:${containerHeigh?.desktop};
		object-fit:cover;
		}

		.caption{
		position: absolute;
  bottom: 100px;
  left: ${innerGap.desktop};
  right: ${innerGap.desktop};
 min-height: 200px;
  padding: 10px;
  border-radius: 5px;
  max-width: 100%;
  text-align: ${contentAlignment};
  z-index: 2;
		
		}
  .overly{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${overlyColor};
  z-index: 1;
  }
  .caroselContainer{
  position: relative;
  height: ${containerHeigh.desktop};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  }
  .caroselWrapper{
  max-width:100%;
   position: relative;
  z-index: 10;
   margin: ${slideMargin?.top} ${slideMargin?.right} ${slideMargin?.bottom} ${slideMargin?.left};
   overflow: hidden;
   border-radius: ${sliderRadius?.top} ${sliderRadius?.right} ${sliderRadius?.bottom} ${sliderRadius?.left};

  }
  .carousel-indicators{
	display: flex;
	flex-direction: ${direction};
    justify-content: center;
    align-items: center;
    position:absolute;
    ${possition()}
    
	}


  @media (max-width: 768px) {
  	.d-block{
		height:${containerHeigh?.mobile};
		object-fit:cover;
		}
  .carouselContainer {
    height:${containerHeigh?.mobile}; 
  }

  .caption {
    bottom: 50px; 
    left: 10px;
    right: 10px;
    height: auto; 
    padding: 5px;
  }

  .caption h3 {
    font-size: 1.5rem; 
  }

  .caption p {
    font-size: 1rem; 
  }
}

	  
	  .sliderTitle {
		animation: ${titleAnimation?.effect}  ${titleAnimation?.duration}s ease-in-out;
    animation-delay: ${titleAnimation?.delay}s!important;
	  }
    .buttonAnchore{
    animation:zoomInFromBottom 0.7s ease-in-out;
    animation-delay: 0.5s;
    }
    .sliderDescription{
    	animation: ${desAnimation?.effect} ${desAnimation?.duration}s ease-in-out;
    animation-delay: ${desAnimation?.delay}s!important;
	  }
    }
    

      @keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-300px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
    @keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(300px); 
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-300px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
}
  @keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(100px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  @keyframes zoomInFromBottom {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.8); 
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1); 
  }
    @keyframes zoomOut {
  from {
    opacity: 1;
    transform: scale(1); 
  }
  to {
    opacity: 0;
    transform: scale(0.8); 
  }
}


@media (max-width: 650px){
 .caroselContainer{
  height: ${containerHeigh.mobile};
  }
  .caption{
  left: ${innerGap.mobile};
  right: ${innerGap.mobile};
  }
  
  }
@media (min-width: 650px) and(max-width:1024px{
 .caroselContainer{
  height: ${containerHeigh.tablet};
 }
  .caption{
  left: ${innerGap.tablet};
  right: ${innerGap.tablet};
  }


}





  

	`}} />;
}
export default Style;