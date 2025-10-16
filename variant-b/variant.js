console.log('Ramp Homepage Variant - H1 + How It Works Section');

// Target the main H1 headline
const h1Element = document.querySelector('h1.headline-xl');

if (h1Element) {
  console.log('Found H1 element', h1Element);
  h1Element.textContent = 'Spend Smarter Work Faster.';
}

// Insert "How it works" section after the hero
const heroSection = document.querySelector('#hero-section');

if (heroSection && h1Element) {
  console.log('Found hero section, inserting How It Works section');
  
  // Insert the new section after hero
  heroSection.insertAdjacentElement('afterend', <HowItWorksSection />);
  
  // Emit variantRendered event after successful changes
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Required elements not found');
}

// How It Works Section Component
function HowItWorksSection() {
  return (
    <section className="cf:bg-white cf:py-16 cf:px-4 cf:md:py-24 cf:lg:py-32">
      <div className="cf:mx-auto cf:w-full cf:max-w-screen-2xl cf:md:px-8 cf:lg:px-12 cf:xl:px-16">
        <div className="cf:text-center cf:mb-12 cf:md:mb-16">
          <h2 className="cf:text-4xl cf:font-normal cf:tracking-tight cf:text-[oklch(0.1465_0.0057_69.2)] cf:md:text-5xl">
            How it works
          </h2>
          <p className="cf:mt-4 cf:text-base cf:text-[oklch(0.1465_0.0057_69.2_/_0.6)] cf:max-w-2xl cf:mx-auto">
            Get started in minutes and see results in days
          </p>
        </div>
        
        <div className="cf:flex cf:flex-col cf:gap-8 cf:lg:flex-row cf:lg:gap-12">
          <Step 
            number="1"
            title="Sign up & connect"
            description="Create your account and connect your ERP in just 5 minutes. Upload your expense policy in 2 minutes."
          />
          <Step 
            number="2"
            title="Issue cards & set controls"
            description="Give your team corporate cards with built-in spending limits and approval flows that enforce themselves."
          />
          <Step 
            number="3"
            title="Automate & save"
            description="Let Ramp handle expense tracking, accounting, and compliance while you focus on growing your business."
          />
        </div>
      </div>
    </section>
  );
}

// Individual Step Component
function Step({ number, title, description }) {
  return (
    <div className="cf:flex-1 cf:flex cf:flex-col cf:items-start cf:p-6 cf:rounded-xl cf:border cf:border-[oklch(0.1465_0.0057_69.2_/_0.1)] cf:bg-[oklch(0.9621_0.0034_67.78)] cf:lg:p-8">
      <div className="cf:flex cf:items-center cf:justify-center cf:w-12 cf:h-12 cf:rounded-full cf:bg-[oklch(0.9199_0.2009_113.99)] cf:text-[oklch(0.1465_0.0057_69.2)] cf:text-xl cf:font-medium cf:mb-6">
        {number}
      </div>
      <h3 className="cf:text-xl cf:font-medium cf:text-[oklch(0.1465_0.0057_69.2)] cf:mb-3">
        {title}
      </h3>
      <p className="cf:text-base cf:text-[oklch(0.1465_0.0057_69.2_/_0.6)] cf:leading-relaxed">
        {description}
      </p>
    </div>
  );
}