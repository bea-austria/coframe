console.log('Ramp Homepage H1 Variant');

// Target the main H1 headline
const h1Element = document.querySelector('h1.headline-xl');

if (h1Element) {
  console.log('Found H1 element', h1Element);
  
  // Update the H1 text content
  h1Element.textContent = 'Spend Smarter Work Faster.';
  
  // Emit variantRendered event after successful change
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('H1 element not found');
}