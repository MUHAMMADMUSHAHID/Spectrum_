import Marquee from "react-fast-marquee";
const images = import.meta.glob(
  "../assets/clients/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const logos = Object.entries(images).map(([path, image]) => ({
  name: path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " "),
  src: image,
}));
const row1 = logos.slice(0, 15);

const row2 = logos.slice(15);

function LogoCard({ logo }) {
  return (
    <div className="mx-5">
      <div className="group flex h-32 w-56 items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all">
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-16 max-w-full object-contain group-hover:scale-110 transition-transform"
        />
      </div>
    </div>
  );
}


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

      {/* Row 1 */}
<div className="relative overflow-hidden">
  <div className="flex w-max animate-marquee">
    {[...row1, ...row1].map((logo, index) => (
      <div
        key={index}
        className="mx-10 flex h-24 w-48 items-center justify-center"
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-12 w-full object-contain"
        />
      </div>
    ))}
  </div>
</div>

{/* Row 2 */}
<div className="relative overflow-hidden mt-8">
  <div className="flex w-max animate-marquee-reverse">
    {[...row2, ...row2].map((logo, index) => (
      <div
        key={index}
        className="mx-10 flex h-24 w-48 items-center justify-center"
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-12 w-full object-contain"
        />
      </div>
    ))}
  </div>
</div>
    </div>
  );
}