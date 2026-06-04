import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function StudentTemplate({
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
      "
      style={{
          
         
      }}
    >
      {/* SIDEBAR */}

      <div className="absolute top-0 left-0 w-[82px] h-full bg-gradient-to-b from-blue-700 to-cyan-500"></div>

      {/* CONTENT */}

      <div className="relative z-10 pl-[105px] pr-10 py-10">

        {/* HEADER */}

        <header className="mb-8">

          <div className="flex items-start justify-between gap-6">

            <div className="flex-1">

              <p className="uppercase tracking-[5px] text-blue-500 text-xs font-bold mb-2">

                Student Resume

              </p>

              <h1 className="text-5xl font-black text-slate-900 mb-4 leading-tight">

                {data.name || "Your Name"}

              </h1>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-slate-600">

                <p>{data.email}</p>

                <p>{data.phone}</p>

                <p>{data.address}</p>

              </div>

            </div>

            {data.profilePhoto && (

              <img
                src={data.profilePhoto}
                alt="Profile"
                className="w-28 h-28 rounded-2xl object-cover border-4 border-blue-500 shadow-lg"
              />

            )}

          </div>

        </header>

        {/* BODY */}

        <div className="grid grid-cols-[250px_1fr] gap-8">

          {/* LEFT */}

          <aside className="space-y-6">

            {/* SUMMARY */}

            {data.summary && (

              <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                <h2 className="text-lg font-black text-blue-700 uppercase mb-3">

                  Career Objective

                </h2>

                <p className="text-[14px] leading-7 text-slate-700 whitespace-pre-line">

                  {data.summary}

                </p>

              </section>

            )}

            {/* SKILLS */}

            {data.skills.length > 0 && (

              <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                <h2 className="text-lg font-black text-cyan-600 uppercase mb-4">

                  Skills

                </h2>

                <div className="space-y-3">

                  {data.skills.map((skill, index) => (

                    <div
                      key={index}
                      className="
                        bg-white
                        border
                        border-blue-200
                        text-blue-700
                        rounded-xl
                        px-4
                        py-3
                        text-[14px]
                        font-semibold
                      "
                    >

                      {skill}

                    </div>

                  ))}

                </div>

              </section>

            )}

          </aside>

          {/* RIGHT */}

          <main className="space-y-6">

            {data.sections.map((section) => (

              <section
                key={section.id}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  p-6
                  shadow-sm
                "
              >

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-3 h-10 rounded-full bg-gradient-to-b from-blue-600 to-cyan-500"></div>

                  <h2 className="text-2xl font-black text-slate-900">

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
                          .map((item, index) => (

                            <div
                              key={index}
                              className="flex items-start gap-3"
                            >

                              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>

                              <p className="text-[15px] leading-7 text-slate-700">

                                {item}

                              </p>

                            </div>

                          ))}

                      </div>

                    ) : (

                      <p className="text-[15px] leading-7 text-slate-700 whitespace-pre-line">

                        {section.content}

                      </p>

                    )}

                  </div>

                )}

                {/* ADVANCED */}

                {section.type === "advanced" && (

                  <div className="space-y-5">

                    {section.items.map((item) => (

                      <div
                        key={item.id}
                        className="
                          border
                          border-slate-200
                          rounded-xl
                          p-5
                          bg-slate-50
                        "
                      >

                        <div className="flex items-start justify-between gap-4 mb-3">

                          <div>

                            <h3 className="text-xl font-bold text-slate-900">

                              {item.title}

                            </h3>

                            <p className="text-[15px] text-slate-600 mt-1">

                              {item.subtitle}

                            </p>

                          </div>

                          <div className="text-[13px] font-bold text-blue-600 whitespace-nowrap">

                            {item.date}

                          </div>

                        </div>

                        {section.bullets ? (

                          <div className="space-y-2">

                            {item.content
                              .split("\n")
                              .map((point, index) => (

                                <div
                                  key={index}
                                  className="flex items-start gap-3"
                                >

                                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>

                                  <p className="text-[15px] leading-7 text-slate-700">

                                    {point}

                                  </p>

                                </div>

                              ))}

                          </div>

                        ) : (

                          <p className="text-[15px] leading-7 text-slate-700 whitespace-pre-line">

                            {item.content}

                          </p>

                        )}

                      </div>

                    ))}

                  </div>

                )}

              </section>

            ))}

          </main>

        </div>

      </div>

    </div>

  );
}