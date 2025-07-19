'use client';

import Image from 'next/image';

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  { title: "Web Development", description: "Responsive websites using modern tech.", image: "/services/web.png" },
  { title: "Mobile Apps", description: "iOS & Android apps built natively or cross-platform.", image: "/services/mobile.png" },
  { title: "UI/UX Design", description: "User-first designs that look and feel great.", image: "/services/design.png" },
  { title: "Cloud Solutions", description: "Deploy scalable apps in the cloud.", image: "/services/cloud.png" },
  { title: "SEO Optimization", description: "Rank better and drive traffic.", image: "/services/seo.png" },
  { title: "Maintenance", description: "Ongoing support and performance tuning.", image: "/services/support.png" },
  { title: "E-Commerce", description: "Complete solutions for online selling.", image: "/services/ecommerce.png" },
  { title: "IT Consulting", description: "Strategic tech advice to grow your business.", image: "/services/consulting.png" },
];

// Utility: Break array into 2-3-2-3 chunks
const chunkServices = (list: Service[]): Service[][] => {
  const chunks: Service[][] = [];
  let i = 0;
  let useTwo = true;

  while (i < list.length) {
    const size = useTwo ? 2 : 3;
    chunks.push(list.slice(i, i + size));
    i += size;
    useTwo = !useTwo;
  }

  return chunks;
};

const ServicesSection: React.FC = () => {
  const rows = chunkServices(services);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>

        <div className="flex flex-col gap-12 items-center">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-8 mb-4">
              {row.map((service, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[300px] bg-white rounded-lg shadow p-6 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>


  );
};

export default ServicesSection;
