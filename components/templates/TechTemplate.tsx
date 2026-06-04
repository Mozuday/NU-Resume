import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function TechTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        mx-auto
        bg-[#050816]
        text-white
        shadow-2xl
         
        border
        border-cyan-500/20

        [&_p]:text-inherit
        [&_li]:text-inherit
        [&_span]:text-inherit
      "
      style={{
          
         
      }}
    >

      {/* SIDEBAR */}

      <div className="absolute top-0 left-0 w-[88px] h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>

      {/* MAIN */}

      <div className="relative z-10 pl-[115px] pr-10 py-10">

        {/* HEADER */}

        <header className="mb-8">

          <div className="flex items-start justify-between gap-8">

            <div className="flex-1">

              <p className="uppercase tracking-[6px] text-cyan-400 text-xs font-bold mb-3">

                Tech Resume

              </p>

              <h1 className="text-5xl font-black leading-tight mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                {data.name || "Your Name"}

              </h1>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-slate-300">

                <p>{data.email}</p>

                <p>{data.phone}</p>

                <p>{data.address}</p>

              </div>

            </div>

            {data.profilePhoto && (

              <img
                src={data.profilePhoto}
                alt="Profile"
                className="
                  w-28
                  h-28
                  rounded-2xl
                  object-cover
                  border-4
                  border-cyan-400
                  shadow-[0_0_30px_rgba(34,211,238,0.35)]
                "
              />

            )}

          </div>

        </header>

        {/* BODY */}

        <div className="grid grid-cols-[260px_1fr] gap-8">

          {/* LEFT */}

          <aside className="space-y-6">

            {/* SUMMARY */}

            {data.summary && (

              <section className="bg-[#0f172a] border border-cyan-500/20 rounded-2xl p-5">

                <h2 className="text-lg font-black text-cyan-400 uppercase mb-4">

                  Profile

                </h2>

                <p className="text-[14px] leading-7 text-slate-300 whitespace-pre-line">

                  {data.summary}

                </p>

              </section>

            )}

            {/* SKILLS */}

            {data.skills.length > 0 && (

              <section className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-5">

                <h2 className="text-lg font-black text-blue-400 uppercase mb-4">

                  Tech Stack

                </h2>

                <div className="space-y-3">

                  {data.skills.map((skill, index) => (

                    <div
                      key={index}
                      className="
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-500
                        text-white
                        rounded-xl
                        px-4
                        py-3
                        text-[14px]
                        font-bold
                        shadow-lg
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
                  bg-[#0f172a]
                  border
                  border-cyan-500/20
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-3 h-10 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>

                  <h2 className="text-2xl font-black text-cyan-400">

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

                              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>

                              <p className="text-[15px] leading-7 text-slate-300">

                                {item}

                              </p>

                            </div>

                          ))}

                      </div>

                    ) : (

                      <p className="text-[15px] leading-7 text-slate-300 whitespace-pre-line">

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
                          border-cyan-500/10
                          bg-[#111827]
                          rounded-xl
                          p-5
                        "
                      >

                        <div className="flex items-start justify-between gap-4 mb-3">

                          <div>

                            <h3 className="text-xl font-bold text-white">

                              {item.title}

                            </h3>

                            <p className="text-[15px] text-slate-400 mt-1">

                              {item.subtitle}

                            </p>

                          </div>

                          <div className="text-[13px] font-bold text-cyan-400 whitespace-nowrap">

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

                                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>

                                  <p className="text-[15px] leading-7 text-slate-300">

                                    {point}

                                  </p>

                                </div>

                              ))}

                          </div>

                        ) : (

                          <p className="text-[15px] leading-7 text-slate-300 whitespace-pre-line">

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