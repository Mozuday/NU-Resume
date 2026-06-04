import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function CorporateTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        bg-white
        shadow-2xl
         
        mx-auto

        [&_p]:text-inherit
        [&_li]:text-inherit
        [&_span]:text-inherit
      "
      style={{
          
         
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.6,
      }}
    >

        {/* SIDEBAR */}

        <div
          className="bg-slate-800 text-white"
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
                className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400"
              />

            ) : (

              <div className="w-40 h-40 rounded-full bg-slate-600"></div>

            )}

          </div>

          {/* NAME */}

          <h1 className="text-4xl font-black text-center mb-8">

            {data.name || "Your Name"}

          </h1>

          {/* CONTACT */}

          <div className="space-y-4 text-slate-300 mb-12 break-words">

            <p>{data.email}</p>

            <p>{data.phone}</p>

            <p>{data.address}</p>

          </div>

          {/* SKILLS */}

          {data.skills.length > 0 && (

            <div>

              <h2 className="text-3xl font-black text-cyan-400 mb-6 uppercase">

                Skills

              </h2>

              <div className="space-y-3">

                {data.skills.map(
                  (skill, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3 bg-slate-700 border border-slate-600 rounded-xl px-4 py-3"
                    >

                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>

                      <p className="text-white">
                        {skill}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

          )}

        </div>

        {/* CONTENT */}

        <div
          className="bg-white"
          style={{
            padding: `${data.padding}px`,
          }}
        >

          {/* SUMMARY */}

          {data.summary && (

            <section className="mb-12">

              <h2 className="text-4xl font-black text-slate-800 mb-6 border-b-4 border-cyan-400 pb-3 uppercase">

                Professional Summary

              </h2>

              <p className="text-gray-700 whitespace-pre-line leading-8">

                {data.summary}

              </p>

            </section>

          )}

          {/* SECTIONS */}

          {data.sections.map(
            (section) => (

              <section
                key={section.id}
                className="mb-12"
              >

                <h2 className="text-4xl font-black text-slate-800 mb-6 border-b-4 border-cyan-400 pb-3 uppercase">

                  {section.heading}

                </h2>

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

                              <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>

                              <p className="text-gray-700">
                                {point}
                              </p>

                            </div>

                          ))}

                      </div>

                    ) : (

                      <p className="text-gray-700 whitespace-pre-line leading-8">

                        {section.content}

                      </p>

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
                          className="border-l-4 border-cyan-400 pl-5"
                        >

                          <div className="flex justify-between items-start gap-4 mb-3">

                            <div>

                              <h3 className="text-2xl font-bold text-slate-800">

                                {item.title}

                              </h3>

                              <p className="text-gray-600 mt-1">

                                {item.subtitle}

                              </p>

                            </div>

                            <p className="text-gray-500 whitespace-nowrap">

                              {item.date}

                            </p>

                          </div>

                          {section.bullets ? (

                            <div className="space-y-2 mt-4">

                              {item.content
                                .split("\n")
                                .map((point, index) => (

                                  <div
                                    key={index}
                                    className="flex items-start gap-3"
                                  >

                                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>

                                    <p className="text-gray-700">
                                      {point}
                                    </p>

                                  </div>

                                ))}

                            </div>

                          ) : (

                            <p className="text-gray-700 whitespace-pre-line leading-8 mt-4">

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