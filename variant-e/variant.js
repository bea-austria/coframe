// Add key benefits section under headline with inline SVG icons
console.log('Adding benefits section to Memory Air landing page');

// Find the elements
const subheadlineEl = document.querySelector('#lp-pom-text-422');
const buttonEl = document.querySelector('#lp-pom-button-423');
const headlineEl = document.querySelector('#lp-pom-text-421');

if (subheadlineEl && buttonEl) {
  // Move headline higher
  if (headlineEl && headlineEl.style.top) {
    const currentHeadlineTop = parseInt(headlineEl.style.top);
    headlineEl.style.top = `${currentHeadlineTop - 50}px`;
  }
  
  // Reduce button size
  buttonEl.style.transform = 'scale(0.85)';
  buttonEl.style.transformOrigin = 'center';
  
  // Get the button's current top position
  const currentButtonTop = parseInt(buttonEl.style.top || '538px');
  
  // Create benefits section with static positioning
  const benefitsSection = (
    <div style="position: absolute; top: 510px; right: 50px; width: 400px; z-index: 210;">
      <div className="cf:flex cf:flex-col cf:gap-2">
        <BenefitItem 
          icon={MemoryIcon} 
          text="Up to 300% memory improvement"
        />
        <BenefitItem 
          icon={SleepIcon} 
          text="Works while you sleep"
        />
        <BenefitItem 
          icon={SafeIcon} 
          text="No drugs, no side effects"
        />
        <BenefitItem 
          icon={LeafIcon} 
          text="All natural ingredients"
        />
      </div>
    </div>
  );

  // Insert benefits section after subheadline
  subheadlineEl.parentNode.insertBefore(benefitsSection, buttonEl);
  
  // Push the button down by adjusting its top position
  const benefitsHeight = 120; // Approximate height of benefits section
  buttonEl.style.top = `${currentButtonTop + benefitsHeight}px`;

  console.log('Benefits section added with adjusted button position');
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Subheadline or button element not found');
}

// Benefit Card Component
function BenefitItem({ icon: Icon, text }) {
  return (
    <div className="cf:flex cf:items-center cf:gap-3">
      <div className="cf:w-8 cf:h-8 cf:flex cf:items-center cf:justify-center cf:bg-black cf:rounded-full cf:flex-shrink-0">
        <Icon />
      </div>
      <p className="cf:text-sm cf:font-medium cf:text-gray-900">{text}</p>
    </div>
  );
}

// SVG Icon Components
function MemoryIcon() {
  return (
    <svg className="cf:w-4 cf:h-4" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.36 5.36l-.707.707M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
    </svg>
  );
}

function SleepIcon() {
  return (
    <svg className="cf:w-4 cf:h-4" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 015.646 5.646 9.001 9.001 0 0020.354 15.354z" />
    </svg>
  );
}

function SafeIcon() {
  return (
    <svg className="cf:w-4 cf:h-4" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="cf:w-4 cf:h-4" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-5a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}
