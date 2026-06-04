import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function GradientTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        mx-auto
        bg-white
         
        shadow-2xl

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

      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white p-10 rounded-b-[40px]">

        <div className="flex items-center justify-between gap-8">

          <div className="flex-1">

            <p className="uppercase tracking-[6px] text-white/80 font-semibold mb-3">

              Professional Resume

            </p>

            <h1 className="text-6xl font-black mb-5 leading-none">

              {data.name || "Your Name"}

            </h1>

            <div className="space-y-2 text-white/90">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

          {data.profilePhoto && (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-36 h-36 rounded-3xl object-cover border-4 border-white shadow-2xl"
            />

          )}

        </div>

      </div>

      {/* SUMMARY */}

      {data.summary && (

        <section className="mt-10 mb-12">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-3 h-10 rounded-full bg-gradient-to-b from-purple-600 to-pink-500"></div>

            <h2 className="text-3xl font-black text-gray-800 uppercase">

              About Me

            </h2>

          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-3xl p-7">

            <p className="text-gray-700 leading-8 whitespace-pre-line">

              {data.summary}

            </p>

          </div>

        </section>

      )}

      {/* SKILLS */}

      {data.skills.length > 0 && (

        <section className="mb-12">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-3 h-10 rounded-full bg-gradient-to-b from-pink-500 to-orange-400"></div>

            <h2 className="text-3xl font-black text-gray-800 uppercase">

              Skills

            </h2>

          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-4">

            {data.skills.map(
              (skill, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mt-2"></div>

                  <p className="text-gray-700 font-medium">
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

            <div className="flex items-center gap-4 mb-5">

              <div className="w-3 h-10 rounded-full bg-gradient-to-b from-purple-600 to-orange-400"></div>

              <h2 className="text-3xl font-black text-gray-800 uppercase">

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

                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mt-2"></div>

                          <p className="text-gray-700">
                            {point}
                          </p>

                        </div>

                      ))}

                  </div>

                ) : (

                  <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm">

                    <p className="text-gray-700 leading-8 whitespace-pre-line">

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
                      className="rounded-3xl border border-gray-200 p-7 bg-gradient-to-r from-white to-purple-50 shadow-sm"
                    >

                      <div className="flex items-start justify-between gap-6 mb-4">

                        <div>

                          <h3 className="text-2xl font-black text-gray-800">

                            {item.title}

                          </h3>

                          <p className="text-gray-600 font-medium mt-1">

                            {item.subtitle}

                          </p>

                        </div>

                        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap">

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

                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mt-2"></div>

                                <p className="text-gray-700">
                                  {point}
                                </p>

                              </div>

                            ))}

                        </div>

                      ) : (

                        <p className="text-gray-700 leading-8 whitespace-pre-line">

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