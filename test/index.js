//project specific config
const target = document.querySelector('.target');

const image1 = document.createElement('img');
image1.setAttribute('src', './bookshelf.png');
const image2 = document.createElement('img');
image2.setAttribute('src', './culo bimbo.jpg');
const image3 = document.createElement('img');
image3.setAttribute('src', './Elsa_Frozen_2.png');
const image4 = document.createElement('img');
image4.setAttribute('src', './goofy_pig_transparent_background.png');
const image5 = document.createElement('img');
image5.setAttribute('src', './img.png');

const imagesArray = [image1, image2, image3, image4, image5];
//set standard styling for all images
for(let i = 0; i<imagesArray.length; i++) {
    imagesArray[i].style.height = '400px';
    imagesArray[i].style.width = '600px';
    imagesArray[i].style.borderRadius = '10px';
}
//test
imageSlider(target, imagesArray);
//-----------------------

function imageSlider(target, imagesArray) {
    //display elements
    let activeImage = 0;
    const mainSliderDiv = document.createElement('div');
    mainSliderDiv.classList = 'mainsliderDiv';
    //layout style
    mainSliderDiv.style.display = 'flex';
    mainSliderDiv.style.height = '98vh';
    mainSliderDiv.style.width = '100vw';
    mainSliderDiv.style.alignItems = 'center';
    mainSliderDiv.style.justifyContent = 'center';

    target.appendChild(mainSliderDiv);

    const leftArrow = document.createElement('img');
    leftArrow.setAttribute('src', '../leftArrow.png');
    leftArrow.classList = 'arrow';
    leftArrow.addEventListener('click', leftArrowEvent);

    const rightArrow = document.createElement('img');
    rightArrow.setAttribute('src', '../rightArrow.png');
    rightArrow.classList = 'arrow';
    rightArrow.addEventListener('click', rightArrowEvent);
    //styling for arrows
    (function() {
        const arrows = [leftArrow, rightArrow];
        for (let i = 0; i<arrows.length; i++) {
            arrows[i].addEventListener('pointerover', ()=> {
                arrows[i].style.backgroundColor = 'rgba(30, 102, 116, 0.8)';
            });
            arrows[i].addEventListener('pointerleave', ()=> {
                arrows[i].style.backgroundColor = 'rgba(156, 216, 228, 0.5)';
            });
            arrows[i].style.backgroundColor = 'rgba(156, 216, 228, 0.5)';
            arrows[i].style.borderRadius = '20px';
            arrows[i].style.paddingTop = '100px';
            arrows[i].style.paddingBottom = '100px';
        }
    }) ();

    const sliderDisplay = document.createElement('div');

    const circleController = document.createElement('div');
    circleController.style.display = 'flex';
    circleController.style.justifyContent = 'center';
    circleController.style.position = 'relative';
    circleController.style.bottom = '40px';

    mainSliderDiv.appendChild(leftArrow);
    mainSliderDiv.appendChild(sliderDisplay);
    mainSliderDiv.appendChild(rightArrow);
    //----------------


    //slide functions
    function rightArrowEvent() {
        for (let i = 0; i < imagesArray.length; i++) {
            if (i === activeImage  ) {
                if (i === imagesArray.length-1) {
                    activeImage = 0
                }
                else {
                    activeImage = i+1
                }
                evaluateImageToRender()
                return 
                }
        }
        
    };

    function leftArrowEvent() {
        for (let i = 0; i < imagesArray.length; i++) {
            if (i === activeImage) {
                if (i === 0) {
                    activeImage = imagesArray.length-1
                }
                else {
                    activeImage = i-1
                }
                evaluateImageToRender()
                return
            }
        }
    };
    //--------------


    //create circles
    for (let i = 0; i < imagesArray.length; i++) {
        const circleImg = document.createElement('img');
        circleImg.setAttribute('src', '../circle.png');
        circleImg.style.height = '30px';
        circleImg.style.backgroundColor = 'rgba(156, 216, 228, 0.5)';
        circleImg.style.borderRadius = '20px';
        circleImg.style.margin = '2px';
        circleController.appendChild(circleImg);

        circleImg.addEventListener('click', ()=> {
            activeImage = i;
            evaluateImageToRender();
        })
        //hover effect
        circleImg.addEventListener('pointerover', ()=> {
            circleImg.style.backgroundColor = 'rgba(30, 102, 116, 0.8)';
        });
        circleImg.addEventListener('pointerleave', ()=> {
            circleImg.style.backgroundColor = 'rgba(156, 216, 228, 0.5)';
        });
    };


    function evaluateImageToRender() {
        sliderDisplay.innerHTML = '';
        sliderDisplay.appendChild(imagesArray[activeImage]);
        sliderDisplay.appendChild(circleController);

    };

    //init render
    evaluateImageToRender(); 
    window.setInterval(rightArrowEvent, 5000);

};

