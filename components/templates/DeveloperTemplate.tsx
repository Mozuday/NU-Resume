import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function DeveloperTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        bg-[#0d1117]
        text-white
        shadow-2xl
         
        border
        border-[#30363d]
        mx-auto

        [&_p]:text-inherit
        [&_li]:text-inherit
        [&_span]:text-inherit
      "
      style={{
          
         
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.7,
      }}
    >

      {/* HEADER */}

      <div
        className="relative z-10 border-b border-[#30363d] bg-[#161b22]"
        style={{
          padding: `${data.padding}px`,
        }}
      >

        <div className="flex items-center justify-between gap-8">

          <div className="flex-1">

            <div className="text-green-400 mb-3 font-mono">
              {"<developer />"}
            </div>

            <h1 className="text-6xl font-black mb-5 text-white">

              {data.name || "Your Name"}

            </h1>

            <div className="space-y-2 text-[#8b949e] break-words">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

          {data.profilePhoto ? (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-36 h-36 rounded-2xl object-cover border-4 border-green-400"
            />

          ) : (

            <div className="w-36 h-36 rounded-2xl bg-[#21262d]"></div>

          )}

        </div>

      </div>

      {/* BODY */}

      <div
        className="relative z-10 space-y-10"
        style={{
          padding: `${data.padding}px`,
        }}
      >

        {/* SUMMARY */}

        {data.summary && (

          <section className="bg-[#161b22] border border-[#30363d] rounded-3xl p-8">

            <h2 className="text-3xl font-black text-green-400 mb-6 uppercase">

              README.md

            </h2>

            <p className="text-[#c9d1d9] whitespace-pre-line leading-9">

              {data.summary}

            </p>

          </section>

        )}

        {/* SKILLS */}

        {data.skills.length > 0 && (

          <section className="bg-[#161b22] border border-[#30363d] rounded-3xl p-8">

            <h2 className="text-3xl font-black text-green-400 mb-8 uppercase">

              Tech Stack

            </h2>

            <div className="space-y-5">

              {data.skills.map(
                (skill, index) => (

                  <div key={index}>

                    <div className="flex items-center justify-between mb-2">

                      <span className="font-semibold text-white">
                        {skill}
                      </span>

                      <span className="text-sm text-[#8b949e]">
                        Expert
                      </span>

                    </div>

                    <div className="w-full h-3 bg-[#21262d] rounded-full  ">

                      <div className="h-full bg-green-400 w-[85%]"></div>

                    </div>

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
              className="bg-[#161b22] border border-[#30363d] rounded-3xl p-8"
            >

              <h2 className="text-3xl font-black text-green-400 mb-6 uppercase">

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

                            <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>

                            <p className="text-[#c9d1d9]">
                              {point}
                            </p>

                          </div>

                        ))}

                    </div>

                  ) : (

                    <p className="text-[#c9d1d9] whitespace-pre-line leading-9">

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
                        className="border-l-4 border-green-400 pl-5"
                      >

                        <div className="flex justify-between items-start gap-4 mb-3">

                          <div>

                            <h3 className="text-2xl font-bold text-white">

                              {item.title}

                            </h3>

                            <p className="text-[#8b949e] mt-1">

                              {item.subtitle}

                            </p>

                          </div>

                          <p className="text-[#8b949e] whitespace-nowrap">

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

                                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>

                                  <p className="text-[#c9d1d9]">
                                    {point}
                                  </p>

                                </div>

                              ))}

                          </div>

                        ) : (

                          <p className="text-[#c9d1d9] whitespace-pre-line leading-9 mt-4">

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