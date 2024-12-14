import Image from 'next/image'

const ProjectShowcase = () => {
  const projects = [
    { id: 1, title: 'Modern Home Gutters', image: 'https://thumbs.dreamstime.com/b/lateral-coated-metal-panel-rain-gutter-rain-water-pipe-roof-lateral-coated-metal-panel-rain-gutter-rain-water-pipe-327440473.jpg' },
    { id: 2, title: 'Rustic Cabin Drainage', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwXbZGAFd3Ex3bOQcrcposVqgRJolItA2KLWbenhhYtYFTLTjDdyHJ07he_ezfg3cV9c&usqp=CAU' },
    { id: 3, title: 'Commercial Building Solution', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyPXiDExNW0ywzKate3rmnXTVCiCl_I4oxskwKl6gILTfpTzC7nZlFygKOY6IeTqYpb4&usqp=CAU' },
  ]

  return (
    <section className="bg-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          Our Recent Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase

