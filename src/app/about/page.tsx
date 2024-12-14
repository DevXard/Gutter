
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8">About GutterPro</h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded in 2005, GutterPro has been at the forefront of gutter installation and maintenance. Our journey began with a simple mission: to protect homes from water damage with high-quality, efficient gutter systems.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Over the years, we&lsquo;ve grown from a small local operation to a trusted name in gutter solutions, serving homeowners and businesses across the region.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Quality: We never compromise on the materials or workmanship.</li>
              <li>Integrity: Honesty and transparency are at the core of our business.</li>
              <li>Customer Satisfaction: Your happiness is our top priority.</li>
              <li>Innovation: We continuously seek better solutions and techniques.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-700 mb-4">
              With GutterPro, you&lsquo;re not just getting a service; you&lsquo;re investing in your home&lsquo;s longevity and your peace of mind. Our experienced team, coupled with our commitment to quality and customer satisfaction, ensures that you receive the best gutter solutions tailored to your needs.
            </p>
            <p className="text-lg text-gray-700">
              We pride ourselves on our attention to detail, timely service, and the use of premium materials. Choose GutterPro for a seamless, stress-free experience in protecting your home from water damage.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}


