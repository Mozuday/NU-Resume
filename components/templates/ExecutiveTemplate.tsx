import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function ExecutiveTemplate({
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
        border
        border-gray-200

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

      {/* TOP HEADER */}

      <div className="bg-slate-900 text-white px-12 py-10 relative z-10">

        <div className="flex items-center justify-between gap-10">

          <div className="flex-1">

            <h1 className="text-6xl font-black leading-tight mb-5">

              {data.name || "Your Name"}

            </h1>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-slate-300">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

          {data.profilePhoto ? (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400"
            />

          ) : (

            <div className="w-40 h-40 rounded-full bg-slate-700"></div>

          )}

        </div>

      </div>

      {/* BODY */}

      <div className="relative z-10 p-12">

        {/* SUMMARY */}

        {data.summary && (

          <section className="mb-12">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-2 h-12 bg-yellow-400 rounded-full"></div>

              <h2 className="text-3xl font-black text-slate-900">

                Executive Summary

              </h2>

            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">

              <p className="text-gray-700 whitespace-pre-line leading-8">

                {data.summary}

              </p>

            </div>

          </section>

        )}

        {/* SKILLS */}

        {data.skills.length > 0 && (

          <section className="mb-12">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-2 h-12 bg-yellow-400 rounded-full"></div>

              <h2 className="text-3xl font-black text-slate-900">

                Core Competencies

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-3">

              {data.skills.map(
                (skill, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2"></div>

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

              <div className="flex items-center gap-4 mb-6">

                <div className="w-2 h-12 bg-yellow-400 rounded-full"></div>

                <h2 className="text-3xl font-black text-slate-900">

                  {section.heading}

                </h2>

              </div>

              {/* BASIC SECTION */}

              {section.type === "basic" && (

                <div>

                  {section.bullets ? (

                    <ul className="space-y-3 pl-6">

                      {section.content
                        .split("\n")
                        .map((point, index) => (

                          <li
                            key={index}
                            className="list-disc text-gray-700"
                          >
                            {point}
                          </li>

                        ))}

                    </ul>

                  ) : (

                    <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">

                      <p className="text-gray-700 whitespace-pre-line leading-8">

                        {section.content}

                      </p>

                    </div>

                  )}

                </div>

              )}

              {/* ADVANCED SECTION */}

              {section.type === "advanced" && (

                <div className="space-y-8">

                  {section.items.map(
                    (item) => (

                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-2xl p-6"
                      >

                        <div className="flex justify-between items-start gap-6 mb-4">

                          <div>

                            <h3 className="text-2xl font-black text-slate-900">

                              {item.title}

                            </h3>

                            <p className="text-gray-600 font-medium mt-1">

                              {item.subtitle}

                            </p>

                          </div>

                          <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">

                            {item.date}

                          </div>

                        </div>

                        {section.bullets ? (

                          <ul className="space-y-3 pl-6">

                            {item.content
                              .split("\n")
                              .map((point, index) => (

                                <li
                                  key={index}
                                  className="list-disc text-gray-700"
                                >
                                  {point}
                                </li>

                              ))}

                          </ul>

                        ) : (

                          <p className="text-gray-700 whitespace-pre-line leading-8">

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

  );
}