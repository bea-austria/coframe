// Add image to lp-pom-box-417
const boxElement = document.querySelector('#lp-pom-box-417');
if (boxElement) {
  const newSrc = "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=600&fit=crop";
  
  // Create image wrapper structure matching the page's pattern
  const imgWrapper = (
    <div className="lp-element lp-pom-image cf:w-full cf:h-full">
      <div className="lp-pom-image-container cf:w-full cf:h-full cf:overflow-hidden">
        <img 
          src={newSrc}
          srcSet={`${newSrc} 1x, ${newSrc} 2x, ${newSrc} 3x`}
          alt="Tree growing on a rock in ocean waves"
          className="cf:w-full cf:h-full cf:object-cover"
        />
      </div>
    </div>
  );

  // Insert the image after the color overlay
  const colorOverlay = boxElement.querySelector('#lp-pom-box-417-color-overlay');
  if (colorOverlay) {
    colorOverlay.after(imgWrapper);
  } else {
    boxElement.prepend(imgWrapper);
  }

  // Ensure image src and srcset are set correctly for all screen sizes
  const img = boxElement.querySelector('img');
  if (img) {
    img.src = newSrc;
    img.setAttribute('srcset', `${newSrc} 1x, ${newSrc} 2x, ${newSrc} 3x`);
  }

  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
  console.log('Image added to lp-pom-box-417');
} else {
  console.error('lp-pom-box-417 not found');
}

// Replace image in lp-pom-image-120
const imageContainer = document.querySelector('#lp-pom-image-120');
if (imageContainer) {
  const img = imageContainer.querySelector('img');
  if (img) {
    const newSrc = "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=600&fit=crop";
    img.src = newSrc;
    img.setAttribute('data-src-mobile-1x', newSrc);
    img.setAttribute('data-src-mobile-2x', newSrc);
    img.setAttribute('data-src-mobile-3x', newSrc);
    img.setAttribute('srcset', `${newSrc} 1x, ${newSrc} 2x, ${newSrc} 3x`);
    console.log('Image replaced in lp-pom-image-120');
  }
} else {
  console.error('lp-pom-image-120 not found');
}