import Marquee from "react-fast-marquee";

export default function Example() {
  const logos = [
    {
      name: "Transistor",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
    },
    {
      name: "Reform",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
    },
    {
      name: "Tuple",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
    },
    {
      name: "SavvyCal",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
    },
    {
      name: "Statamic",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
    },
  ];

   return (
    <div className="bg-white dark:bg-gray-900 py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-[#E4910C]/10 dark:bg-indigo-500/10 text-[#E4910C] dark:text-indigo-300 font-medium text-sm mb-4 border border-[#E4910C]/20 dark:border-indigo-500/20">
                Our Clients
              </span>
      </div>
    <div className="max-w-3xl mx-auto text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-[#002C66] dark:text-white mb-6">Trusted by Industry Leaders</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">We have successfully served 120+ satisfied clients across Mumbai, Pune, Goa, and other major cities in India, helping them achieve their certification and quality goals.</p>
            </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-10 flex h-24 w-48 items-center justify-center"
            >
              <img
  src={logo.src}
  alt={logo.name}
  className="max-h-12 w-full object-contain dark:invert-0 invert"
/>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-10 flex h-24 w-48 items-center justify-center"
            >
              <img
  src={logo.src}
  alt={logo.name}
  className="max-h-12 w-full object-contain dark:invert-0 invert"
/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}