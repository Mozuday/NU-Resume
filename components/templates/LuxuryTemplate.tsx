import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function LuxuryTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        mx-auto
        bg-[#111111]
        text-white
         
        shadow-2xl
        border border-yellow-700

        [&_p]:text-inherit
        [&_li]:text-inherit
        [&_span]:text-inherit
      "
      style={{
          
         
        padding: `${data.padding}px`,
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.7,
      }}
    >
      {/* HEADER */}

      <div className="bg-gradient-to-r from-black via-[#1a1a1a] to-black border-b border-yellow-700 p-10 rounded-b-[40px]">

        <div className="flex items-center justify-between gap-8">

          <div className="flex-1">

            <p className="uppercase tracking-[8px] text-yellow-500 font-semibold mb-4">

              Luxury Resume

            </p>

            <h1 className="text-7xl font-black text-yellow-500 mb-5 leading-none">

              {data.name || "Your Name"}

            </h1>

            <div className="space-y-2 text-gray-300">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

          {data.profilePhoto && (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.4)]"
            />

          )}

        </div>

      </div>

      {/* SUMMARY */}

      {data.summary && (

        <section className="mt-10 mb-12">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-3 h-12 rounded-full bg-yellow-500"></div>

            <h2 className="text-3xl font-black text-yellow-500 uppercase">

              Executive Profile

            </h2>

          </div>

          <div className="bg-[#1a1a1a] border border-yellow-700 rounded-3xl p-8">

            <p className="text-gray-300 leading-8 whitespace-pre-line">

              {data.summary}

            </p>

          </div>

        </section>

      )}

      {/* SKILLS */}

      {data.skills.length > 0 && (

        <section className="mb-12">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-3 h-12 rounded-full bg-yellow-500"></div>

            <h2 className="text-3xl font-black text-yellow-500 uppercase">

              Expertise

            </h2>

          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-4">

            {data.skills.map(
              (skill, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>

                  <p className="text-gray-300 font-medium">
                    {skill}
                  </p>

                </div>

              )
            )}

          </div>

        </section>

      )}

      {/* SECTIONS */}

      {data.sections.map(
        (section) => (

          <section
            key={section.id}
            className="mb-12"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-3 h-12 rounded-full bg-yellow-500"></div>

              <h2 className="text-3xl font-black text-yellow-500 uppercase">

                {section.heading}

              </h2>

            </div>

            {/* BASIC */}

            {section.type === "basic" && (

              <div>

                {section.bullets ? (

                  <div className="space-y-3">

                    {section.content
                      .split("\n")
                      .map((point, index) => (

                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >

                          <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>

                          <p className="text-gray-300">
                            {point}
                          </p>

                        </div>

                      ))}

                  </div>

                ) : (

                  <div className="bg-[#1a1a1a] border border-yellow-700 rounded-3xl p-8">

                    <p className="text-gray-300 leading-8 whitespace-pre-line">

                      {section.content}

                    </p>

                  </div>

                )}

              </div>

            )}

            {/* ADVANCED */}

            {section.type === "advanced" && (

              <div className="space-y-8">

                {section.items.map(
                  (item) => (

                    <div
                      key={item.id}
                      className="bg-[#1a1a1a] border border-yellow-700 rounded-3xl p-8"
                    >

                      <div className="flex items-start justify-between gap-6 mb-5">

                        <div>

                          <h3 className="text-2xl font-black text-white">

                            {item.title}

                          </h3>

                          <p className="text-gray-400 font-medium mt-1">

                            {item.subtitle}

                          </p>

                        </div>

                        <div className="bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-black whitespace-nowrap">

                          {item.date}

                        </div>

                      </div>

                      {section.bullets ? (

                        <div className="space-y-3">

                          {item.content
                            .split("\n")
                            .map((point, index) => (

                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >

                                <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>

                                <p className="text-gray-300">
                                  {point}
                                </p>

                              </div>

                            ))}

                        </div>

                      ) : (

                        <p className="text-gray-300 leading-8 whitespace-pre-line">

                          {item.content}

                        </p>

                      )}

                    </div>

                  )
                )}

              </div>

            )}

          </section>

        )
      )}

    </div>

  );
}