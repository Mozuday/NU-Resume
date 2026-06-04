"use client";

import Link from "next/link";
import Image from "next/image";

const templates = [
  {
    name: "Modern",
    image: "/templates/modern.png",
  },
  {
    name: "Creative",
    image: "/templates/creative.png",
  },
  {
    name: "Business",
    image: "/templates/business.png",
  },
  {
    name: "Professional",
    image: "/templates/professional.png",
  },
  {
    name: "Minimal",
    image: "/templates/minimal.png",
  },
  {
    name: "Classic",
    image: "/templates/classic.png",
  },
  {
    name: "Dark",
    image: "/templates/dark.png",
  },
  {
    name: "Elegant",
    image: "/templates/elegant.png",
  },
  {
    name: "Corporate",
    image: "/templates/corporate.png",
  },
  {
    name: "Compact",
    image: "/templates/compact.png",
  },
  {
    name: "Gradient",
    image: "/templates/gradient.png",
  },
  {
    name: "Developer",
    image: "/templates/developer.png",
  },
  {
    name: "Designer",
    image: "/templates/designer.png",
  },
  {
    name: "Student",
    image: "/templates/student.png",
  },
  {
    name: "Executive",
    image: "/templates/executive.png",
  },
  {
    name: "Luxury",
    image: "/templates/luxury.png",
  },
  {
    name: "Startup",
    image: "/templates/startup.png",
  },
  {
    name: "Tech",
    image: "/templates/tech.png",
  },
  {
    name: "ATSModern",
    image: "/templates/atsmodern.png",
  },
  {
    name: "Simple",
    image: "/templates/simple.png",
  },
];


export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-white px-4 py-12">

      {/* HEADER */}

      <div className="max-w-7xl mx-auto text-center mb-14">

        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Resume Templates
        </h1>

        <p className="text-lg text-gray-600">
          Choose from premium ATS-friendly resume designs
        </p>

      </div>

      {/* GRID */}

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 xl:grid-cols-3 gap-10">

        {templates.map((template) => (

          <div
            key={template.name}
            className="
              bg-white
              rounded-[32px]
              overflow-hidden
              shadow-xl
              border border-gray-100
              hover:-translate-y-2
              transition
              duration-300
            "
          >

            {/* IMAGE */}

            <div className="bg-gray-100 p-6">

              <div className="relative aspect-[210/297] rounded-2xl overflow-hidden shadow-2xl bg-white">

                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                />

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-7">

              <div className="flex items-center justify-between mb-6">

                <div>

                  <h2 className="text-3xl font-black">
                    {template.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Premium Resume Template
                  </p>

                </div>

                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                  ATS

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex gap-4">

                <Link
                  href={`/builder?template=${template.name}`}
                  className="
                    flex-1
                    bg-black
                    text-white
                    text-center
                    py-4
                    rounded-2xl
                    font-bold
                    hover:bg-gray-800
                    transition
                  "
                >
                  Use Template
                </Link>

                <Link
                  href={`/builder?template=${template.name}`}
                  className="
                    px-6
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-gray-300
                    hover:bg-gray-100
                    transition
                    font-semibold
                  "
                >
                  Preview
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}