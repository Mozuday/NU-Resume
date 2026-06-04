import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function StartupTemplate({
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

      <div className="absolute top-0 left-0 w-[88px] h-full bg-gradient-to-b from-violet-700 via-fuchsia-600 to-pink-500"></div>

      {/* CONTENT */}

      <div className="relative z-10 pl-[110px] pr-10 py-10">

        {/* HEADER */}

        <header className="mb-8">

          <div className="flex items-start justify-between gap-6">

            <div className="flex-1">

              <h1 className="text-5xl font-black text-slate-900 leading-tight mb-4">

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
                className="w-28 h-28 rounded-2xl object-cover border-4 border-violet-500 shadow-lg"
              />

            )}

          </div>

        </header>

        {/* MAIN GRID */}

        <div className="grid grid-cols-[260px_1fr] gap-8">

          {/* LEFT SIDEBAR CONTENT */}

          <aside className="space-y-6">

            {/* SUMMARY */}

            {data.summary && (

              <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5">

                <h2 className="text-lg font-black text-violet-600 uppercase mb-3">

                  Summary

                </h2>

                <p className="text-[14px] leading-7 text-slate-700 whitespace-pre-line">

                  {data.summary}

                </p>

              </section>

            )}

            {/* SKILLS */}

            {data.skills.length > 0 && (

              <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5">

                <h2 className="text-lg font-black text-fuchsia-600 uppercase mb-4">

                  Skills

                </h2>

                <div className="flex flex-wrap gap-2">

                  {data.skills.map((skill, index) => (

                    <div
                      key={index}
                      className="
                        bg-gradient-to-r
                        from-violet-600
                        to-fuchsia-500
                        text-white
                        px-3
                        py-2
                        rounded-lg
                        text-[13px]
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

          {/* RIGHT CONTENT */}

          <main className="space-y-6">

            {data.sections.map((section) => (

              <section
                key={section.id}
                className="
                  border
                  border-slate-200
                  rounded-2xl
                  p-6
                  bg-white
                  shadow-sm
                "
              >

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-3 h-10 rounded-full bg-gradient-to-b from-violet-600 to-pink-500"></div>

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

                              <div className="w-2 h-2 rounded-full bg-violet-600 mt-2"></div>

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

                          <div className="text-[13px] font-bold text-violet-600 whitespace-nowrap">

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

                                  <div className="w-2 h-2 rounded-full bg-fuchsia-500 mt-2"></div>

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