import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function DarkTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        bg-zinc-950
        text-white
        shadow-2xl
         
        border
        border-zinc-800
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

      {/* HEADER */}

      <div
        className="relative z-10 bg-zinc-900 border-b border-zinc-800"
        style={{
          padding: `${data.padding}px`,
        }}
      >

        <div className="flex items-center justify-between gap-8">

          <div className="flex-1">

            <h1 className="text-6xl font-black mb-5 tracking-wide text-white">

              {data.name || "Your Name"}

            </h1>

            <div className="space-y-2 text-zinc-400 break-words">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

          {data.profilePhoto ? (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-cyan-400"
            />

          ) : (

            <div className="w-36 h-36 rounded-full bg-zinc-700"></div>

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

          <section className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

            <h2 className="text-3xl font-black text-cyan-400 mb-6 uppercase">

              Summary

            </h2>

            <p className="text-zinc-300 whitespace-pre-line leading-8">

              {data.summary}

            </p>

          </section>

        )}

        {/* SKILLS */}

        {data.skills.length > 0 && (

          <section className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

            <h2 className="text-3xl font-black text-cyan-400 mb-6 uppercase">

              Skills

            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">

              {data.skills.map(
                (skill, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>

                    <p className="text-zinc-200">
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
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800"
            >

              <h2 className="text-3xl font-black text-cyan-400 mb-6 uppercase">

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

                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>

                            <p className="text-zinc-300">
                              {point}
                            </p>

                          </div>

                        ))}

                    </div>

                  ) : (

                    <p className="text-zinc-300 whitespace-pre-line leading-8">

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

                            <h3 className="text-2xl font-bold text-white">

                              {item.title}

                            </h3>

                            <p className="text-zinc-400 mt-1">

                              {item.subtitle}

                            </p>

                          </div>

                          <p className="text-zinc-500 whitespace-nowrap">

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

                                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>

                                  <p className="text-zinc-300">
                                    {point}
                                  </p>

                                </div>

                              ))}

                          </div>

                        ) : (

                          <p className="text-zinc-300 whitespace-pre-line leading-8 mt-4">

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