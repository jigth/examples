const imageHandler = () => {
    let currentIndex = 0;
    let currentImage = imagesList[0];
    
    const passImage = () => {
        let currentImage = imagesList[currentIndex % imagesList.length];
        currentIndex++;

        return currentImage;
    }

    return {
        currentImage,
        currentIndex,
        passImage
        
    }
}

const handler = imageHandler();

const updateImage = () => {
    let imageName = handler.passImage();
    const baseRoute = 'static/images';
    document.querySelector('img').src =  `${baseRoute}/${imageName}`;
}

const handleClick = () => {
    updateImage()
}

setInterval(updateImage, 7000);