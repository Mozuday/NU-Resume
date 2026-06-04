import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function ElegantTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        bg-[#f8f5ef]
        shadow-2xl
         
        border
        border-yellow-200
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
        className="relative z-10 bg-[#1f1a17] text-[#d4af37]"
        style={{
          padding: `${data.padding}px`,
        }}
      >

        <div className="flex items-center justify-between gap-8">

          <div className="flex-1">

            <h1 className="text-6xl font-serif font-bold mb-5 tracking-wide">

              {data.name || "Your Name"}

            </h1>

            <div className="space-y-2 text-yellow-100 break-words">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

          {data.profilePhoto ? (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-[#d4af37]"
            />

          ) : (

            <div className="w-40 h-40 rounded-full bg-[#d4af37]/20"></div>

          )}

        </div>

      </div>

      {/* BODY */}

      <div
        className="relative z-10 space-y-14"
        style={{
          padding: `${data.padding}px`,
        }}
      >

        {/* SUMMARY */}

        {data.summary && (

          <section>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-[2px] bg-[#d4af37]"></div>

              <h2 className="text-4xl font-serif font-bold text-[#1f1a17] uppercase">

                Profile

              </h2>

            </div>

            <p className="text-gray-700 whitespace-pre-line leading-9">

              {data.summary}

            </p>

          </section>

        )}

        {/* SKILLS */}

        {data.skills.length > 0 && (

          <section>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-[2px] bg-[#d4af37]"></div>

              <h2 className="text-4xl font-serif font-bold text-[#1f1a17] uppercase">

                Skills

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-3">

              {data.skills.map(
                (skill, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></div>

                    <p className="text-gray-700">
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
            >

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-[2px] bg-[#d4af37]"></div>

                <h2 className="text-4xl font-serif font-bold text-[#1f1a17] uppercase">

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

                            <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></div>

                            <p className="text-gray-700">
                              {point}
                            </p>

                          </div>

                        ))}

                    </div>

                  ) : (

                    <p className="text-gray-700 whitespace-pre-line leading-9">

                      {section.content}

                    </p>

                  )}

                </div>

              )}

              {/* ADVANCED */}

              {section.type === "advanced" && (

                <div className="space-y-10">

                  {section.items.map(
                    (item) => (

                      <div
                        key={item.id}
                        className="border-l-4 border-[#d4af37] pl-5"
                      >

                        <div className="flex justify-between items-start gap-4 mb-3">

                          <div>

                            <h3 className="text-2xl font-bold text-[#1f1a17]">

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

                                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></div>

                                  <p className="text-gray-700">
                                    {point}
                                  </p>

                                </div>

                              ))}

                          </div>

                        ) : (

                          <p className="text-gray-700 whitespace-pre-line leading-9 mt-4">

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