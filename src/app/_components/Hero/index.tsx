import Image from 'next/image'
import Button from '@/app/_components/Button'


const Hero = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-5/12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-6xl">
              Protect Your Home with Quality Gutters
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Our expert team installs durable, efficient gutters to safeguard your home from water damage. Get a free quote today!
            </p>
            <div className="mt-10">
              <Button size="lg">
                Get a Free Quote
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:shrink-0 max-w-[530px] max-h-[600px] mt-10 lg:mt-0 lg:w-7/12">
            <Image
              src="https://t4.ftcdn.net/jpg/02/08/90/27/360_F_208902768_qL3GYEZIjloIbZTs9IGE4OmdDFGPLAR2.jpg"
              alt="Gutter installation"
              fill
              sizes="(min-width: 400px) 50vw, 100vw"
              style={{
                objectFit: 'cover',
              }}
              quality={85}
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='gray' /></svg>"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero