import Link from "next/link";

export default function HomePage() {

  return (

    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 overflow-x-hidden">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">

          <Link
            href="/"
            className="text-3xl md:text-4xl font-black"
          >
            ResumeAI
          </Link>

          <div className="flex items-center gap-3 md:gap-5">

            <a
  href="https://yourportfolio.com"
  target="_blank"
  className="text-sm md:text-lg font-medium hover:text-gray-600 transition"
>
  Developer
</a>

            <Link
              href="/builder"
              className="bg-black text-white px-4 md:px-8 py-3 rounded-2xl text-sm md:text-base hover:bg-gray-800 hover:scale-105 transition"
            >
              Create Resume
            </Link>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-block bg-black text-white px-5 py-2 rounded-full mb-6 text-sm font-semibold shadow-lg">
            ATS Friendly Resume Builder
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">

            Build Professional
            ATS Resumes
            In Minutes

          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-8 md:leading-9 mb-10">

            Create beautiful resumes with modern templates,
            photo upload, custom sections,
            and instant PDF export.

          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <Link
              href="/builder"
              className="bg-black text-white px-8 py-5 rounded-2xl text-lg font-semibold text-center hover:bg-gray-800 hover:-translate-y-1 transition shadow-xl"
            >
              Create New Resume
            </Link>

            <Link
              href="/templates"
              className="border-2 border-black px-8 py-5 rounded-2xl text-lg font-semibold text-center hover:bg-black hover:text-white hover:-translate-y-1 transition bg-white"
            >
              Explore Templates
            </Link>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-16">

            <div className="bg-white rounded-3xl p-5 md:p-6 shadow-lg">

              <h3 className="text-3xl md:text-4xl font-black">
                20+
              </h3>

              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Templates
              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 md:p-6 shadow-lg">

              <h3 className="text-3xl md:text-4xl font-black">
                PDF
              </h3>

              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Export
              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 md:p-6 shadow-lg">

              <h3 className="text-3xl md:text-4xl font-black">
                ATS
              </h3>

              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Optimized
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="absolute inset-0 bg-black rounded-[40px] rotate-3 opacity-10"></div>

          <div className="relative bg-white rounded-[35px] md:rounded-[40px] shadow-2xl   border">

            <div className="bg-black text-white p-6 md:p-8">

              <div className="flex items-center gap-4 md:gap-5">

                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300"></div>

                <div className="flex-1">

                  <div className="h-5 md:h-6 bg-white/30 rounded w-40 md:w-52 mb-3"></div>

                  <div className="h-4 bg-gray-300 rounded w-32 md:w-40 mb-2"></div>

                  <div className="h-4 bg-gray-300 rounded w-24 md:w-32"></div>

                </div>

              </div>

            </div>

            <div className="p-6 md:p-8 space-y-8">

              <div>

                <div className="h-5 bg-gray-300 rounded w-32 md:w-40 mb-5"></div>

                <div className="space-y-3">

                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/6"></div>

                </div>

              </div>

              <div>

                <div className="h-5 bg-gray-300 rounded w-24 md:w-32 mb-5"></div>

                <div className="flex flex-wrap gap-3">

                  <div className="h-10 w-20 md:w-24 rounded-full bg-gray-300"></div>
                  <div className="h-10 w-16 md:w-20 rounded-full bg-gray-300"></div>
                  <div className="h-10 w-24 md:w-28 rounded-full bg-gray-300"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "20+ Templates",
              desc: "Modern ATS-friendly resume layouts",
            },
            {
              title: "PDF Export",
              desc: "Download resumes instantly in high quality",
            },
            {
              title: "Fully Custom",
              desc: "Add your own custom sections and structure",
            },
            {
              title: "Affordable",
              desc: "Only ₹19 per premium resume download",
            },
          ].map((feature) => (

            <div
              key={feature.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.desc}
              </p>

            </div>

          ))}

          

        </div>

      </section>

    </main>
  );
}