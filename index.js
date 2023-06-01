function changeImageSrc() {
    const imgElement = document.querySelector('.img_animation');
    const baseSrc = 'css folder/images/R_M_035';
    let imageNumber = 3;
  
    setInterval(function() {
      // Add a CSS class to trigger the transition
      imgElement.classList.add('fade-out');
  
      setTimeout(function() {
        let newSrc = baseSrc + imageNumber + '.jpg';
        imgElement.setAttribute('src', newSrc);
  
        // Remove the CSS class after the transition ends
        imgElement.addEventListener('transitionend', function() {
          imgElement.classList.remove('fade-out');
        });
  
        // Increment the image number
        imageNumber++;
        if (imageNumber > 5) {
          imageNumber = 3; // Reset to the initial image number
        }
      }, 500); // Delay changing the source after 500 milliseconds (adjust as needed)
    }, 2000); // Delay each change by 2 seconds (adjust as needed)
  }
  
  changeImageSrc();
  


