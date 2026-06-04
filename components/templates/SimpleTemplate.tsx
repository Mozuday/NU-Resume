import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function SimpleTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        mx-auto
        bg-white
         
        shadow-xl

        [&_p]:text-inherit
        [&_li]:text-inherit
        [&_span]:text-inherit
      "
      style={{
          
         
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.7,
      }}
    >

      <div className="grid grid-cols-[260px_1fr] min-h-[297mm]">

        {/* SIDEBAR */}

        <div
          className="bg-gray-900 text-white"
          style={{
            padding: `${data.padding}px`,
          }}
        >

          {/* PHOTO */}

          <div className="flex justify-center mb-8">

            {data.profilePhoto ? (

              <img
                src={data.profilePhoto}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />

            ) : (

              <div className="w-32 h-32 rounded-full bg-gray-700"></div>

            )}

          </div>

          {/* NAME */}

          <div className="text-center mb-10">

            <h1 className="text-4xl font-black leading-tight mb-3">

              {data.name || "Your Name"}

            </h1>

            <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>

          </div>

          {/* CONTACT */}

          <div className="mb-10">

            <h2 className="text-xl font-bold uppercase tracking-wide mb-5">

              Contact

            </h2>

            <div className="space-y-3 text-gray-300">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

          {/* SKILLS */}

          {data.skills.length > 0 && (

            <div>

              <h2 className="text-xl font-bold uppercase tracking-wide mb-5">

                Skills

              </h2>

              <div className="space-y-3">

                {data.skills.map(
                  (skill, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <div className="w-2 h-2 rounded-full bg-white mt-2"></div>

                      <p className="text-gray-300">
                        {skill}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

          )}

        </div>

        {/* MAIN CONTENT */}

        <div
          style={{
            padding: `${data.padding}px`,
          }}
        >

          {/* SUMMARY */}

          {data.summary && (

            <section className="mb-10">

              <div className="flex items-center gap-4 mb-5">

                <div className="w-3 h-10 rounded-full bg-gray-900"></div>

                <h2 className="text-3xl font-black text-gray-900 uppercase">

                  Summary

                </h2>

              </div>

              <p className="text-gray-700 leading-8 whitespace-pre-line">

                {data.summary}

              </p>

            </section>

          )}

          {/* SECTIONS */}

          {data.sections.map(
            (section) => (

              <section
                key={section.id}
                className="mb-10"
              >

                <div className="flex items-center gap-4 mb-5">

                  <div className="w-3 h-10 rounded-full bg-gray-900"></div>

                  <h2 className="text-3xl font-black text-gray-900 uppercase">

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

                              <div className="w-2 h-2 rounded-full bg-gray-900 mt-2"></div>

                              <p className="text-gray-700">
                                {point}
                              </p>

                            </div>

                          ))}

                      </div>

                    ) : (

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">

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
                          className="border border-gray-200 rounded-2xl p-6"
                        >

                          <div className="flex items-start justify-between gap-6 mb-4">

                            <div>

                              <h3 className="text-2xl font-bold text-gray-900">

                                {item.title}

                              </h3>

                              <p className="text-gray-500 mt-1">

                                {item.subtitle}

                              </p>

                            </div>

                            <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">

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

                                    <div className="w-2 h-2 rounded-full bg-gray-900 mt-2"></div>

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

      </div>

    </div>

  );
}