const stats = [
  { id: 1, name: 'Years of Collective Experience', value: '21+' },
  { id: 2, name: 'Training Sessions Conducted', value: '1000+' },
  { id: 3, name: 'Satisfied Clients', value: '120+' },
  { id: 4, name: 'ISO Standards Covered', value: '7+' },
]

export default function Example() {
  return (
    <div className=" bg-white dark:bg-gray-900">
      <div className="pt-30 sm:pt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-[#002066] dark:text-white sm:text-4xl">
              Meet our people
            </h2>
            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              We are a dynamic group of professionals dedicated to delivering the best results for our clients.
            </p>
          </div>
       <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#002C66] dark:bg-gray-900 py-12 mt-16">
  <dl className="mx-auto max-w-7xl grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex flex-col items-center justify-center gap-y-4"
      >
        <dt className="text-base text-gray-300">
          {stat.name}
        </dt>

        <dd className="order-first text-3xl font-semibold tracking-tight text-[#E4910C] sm:text-5xl">
          {stat.value}
        </dd>
      </div>
    ))}
  </dl>
</div>
        </div>
      </div>
    </div>
  )
}
