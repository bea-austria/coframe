console.log('Ramp Homepage Variant - Original Colors');

// Target the main H1 headline
const h1Element = document.querySelector('h1.headline-xl');

if (h1Element) {
  console.log('Found H1 element', h1Element);
  h1Element.textContent = 'Spend Smarter Work Faster.';
}

// Insert sections after the hero
const heroSection = document.querySelector('#hero-section');

if (heroSection && h1Element) {
  console.log('Found hero section, inserting new sections');
  
  // Insert the Business Strengths section first
  heroSection.insertAdjacentElement('afterend', <BusinessStrengthsSection />);
  
  // Insert How it Works section after Business Strengths
  const strengthsSection = heroSection.nextElementSibling;
  if (strengthsSection) {
    strengthsSection.insertAdjacentElement('afterend', <HowItWorksSection />);
  }
  
  // Emit variantRendered event after successful changes
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Required elements not found');
}

// Business Strengths Section Component
function BusinessStrengthsSection() {
  return (
    <section className="cf:bg-gradient-to-b cf:from-white cf:to-[oklch(0.97_0.002_67.78)] cf:py-16 cf:px-4 cf:md:py-20 cf:lg:py-32">
      <div className="cf:mx-auto cf:w-full cf:max-w-screen-2xl cf:md:px-8 cf:lg:px-12 cf:xl:px-16">
        <div className="cf:text-center cf:mb-12 cf:md:mb-16">
          <h2 className="cf:text-3xl cf:font-normal cf:tracking-tight cf:text-[oklch(0.1465_0.0057_69.2)] cf:md:text-4xl cf:lg:text-5xl">
            Trusted by finance teams everywhere
          </h2>
        </div>
        
        <div className="cf:grid cf:grid-cols-1 cf:gap-6 cf:md:grid-cols-2 cf:lg:grid-cols-4 cf:md:gap-8">
          <StatCard 
            number="45,000+"
            label="Businesses"
            description="Companies using Ramp to simplify their finances"
          />
          <StatCard 
            number="20M+"
            label="Hours saved"
            description="Time given back to finance teams annually"
          />
          <StatCard 
            number="$1B+"
            label="Saved by customers"
            description="Total savings realized through Ramp"
          />
          <StatCard 
            number="5 stars"
            label="Customer rating"
            description="Based on 2,000+ verified reviews"
          />
        </div>
      </div>
    </section>
  );
}

// Stat Card Component
function StatCard({ number, label, description }) {
  return (
    <div className="cf:flex cf:flex-col cf:items-center cf:text-center cf:p-6 cf:rounded-xl cf:bg-white cf:border cf:border-[oklch(0.1465_0.0057_69.2_/_0.1)] cf:shadow-sm cf:transition-transform cf:duration-300 cf:hover:scale-105 cf:lg:p-8">
      <div className="cf:text-4xl cf:font-normal cf:text-[oklch(0.1465_0.0057_69.2)] cf:mb-2 cf:md:text-5xl">
        {number}
      </div>
      <div className="cf:text-lg cf:font-medium cf:text-[oklch(0.1465_0.0057_69.2)] cf:mb-3">
        {label}
      </div>
      <p className="cf:text-sm cf:text-[oklch(0.1465_0.0057_69.2_/_0.6)] cf:leading-relaxed">
        {description}
      </p>
    </div>
  );
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

// Individual Step Component with original yellow brand color
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