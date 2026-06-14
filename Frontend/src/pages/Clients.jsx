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
    <div className="bg-gray-900 py-24 overflow-hidden">
      <h2 className="text-center text-white text-2xl font-bold mb-12">
        Trusted by the world's most innovative teams
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-10 flex h-24 w-48 items-center justify-center"
            >
              <img
                src={logo.src}
                alt="client"
                className="max-h-12 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}