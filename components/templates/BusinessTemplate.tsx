import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function BusinessTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        bg-white
        w-full
        h-full
         

        [&_p]:text-inherit
        [&_li]:text-inherit
        [&_span]:text-inherit
      "
      style={{
        padding: `${data.padding}px`,
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.6,
      }}
    >
      {/* SIDEBAR */}

      <div className="absolute top-0 left-0 w-4 h-full bg-[#1E293B]"></div>

      {/* HEADER */}

      <div className="mb-10 pl-5 relative z-10">

        <div className="flex items-start justify-between gap-6">

          <div className="flex-1">

            <h1 className="text-4xl font-black text-[#1E293B] leading-tight mb-3">

              {data.name || "Your Name"}

            </h1>

            <div className="w-20 h-[3px] bg-[#1E293B] mb-4 rounded-full"></div>

            <div className="space-y-1 text-gray-700 text-sm">

              {data.address && (
                <p>{data.address}</p>
              )}

              {data.phone && (
                <p>{data.phone}</p>
              )}

              {data.email && (
                <p>{data.email}</p>
              )}

            </div>

          </div>

          {data.profilePhoto && (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="
                w-28
                h-28
                rounded-xl
                object-cover
                border-[3px]
                border-[#1E293B]
              "
            />

          )}

        </div>

      </div>

      {/* SUMMARY */}

      {data.summary && (

        <section className="mb-8 pl-5 relative z-10">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-3 h-8 rounded-full bg-[#1E293B]"></div>

            <h2 className="text-xl font-black uppercase tracking-wide text-[#1E293B]">

              Executive Summary

            </h2>

          </div>

          <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5">

            <p className="text-gray-800 whitespace-pre-line leading-7 text-[15px]">

              {data.summary}

            </p>

          </div>

        </section>

      )}

      {/* SKILLS */}

      {data.skills.length > 0 && (

        <section className="mb-8 pl-5 relative z-10">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-3 h-8 rounded-full bg-[#1E293B]"></div>

            <h2 className="text-xl font-black uppercase tracking-wide text-[#1E293B]">

              Core Skills

            </h2>

          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2">

            {data.skills.map((skill, index) => (

              <div
                key={index}
                className="flex items-start gap-2"
              >

                <div className="w-2 h-2 rounded-full bg-[#1E293B] mt-2"></div>

                <p className="text-gray-800 text-[15px]">
                  {skill}
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {/* SECTIONS */}

      {data.sections.map((section) => (

        <section
          key={section.id}
          className="mb-8 pl-5 relative z-10"
        >

          <div className="flex items-center gap-3 mb-4">

            <div className="w-3 h-8 rounded-full bg-[#1E293B]"></div>

            <h2 className="text-xl font-black uppercase tracking-wide text-[#1E293B]">

              {section.heading}

            </h2>

          </div>

          {/* BASIC */}

          {section.type === "basic" && (

            <div>

              {section.bullets ? (

                <div className="space-y-2">

                  {section.content
                    .split("\n")
                    .filter(
                      (point) =>
                        point.trim() !== ""
                    )
                    .map((point, index) => (

                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <div className="w-2 h-2 rounded-full bg-[#1E293B] mt-2"></div>

                        <p className="text-gray-800 leading-7 text-[15px]">

                          {point}

                        </p>

                      </div>

                    ))}

                </div>

              ) : (

                <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5">

                  <p className="text-gray-800 whitespace-pre-line leading-7 text-[15px]">

                    {section.content}

                  </p>

                </div>

              )}

            </div>

          )}

          {/* ADVANCED */}

          {section.type === "advanced" && (

            <div className="space-y-6">

              {section.items.map((item) => (

                <div
                  key={item.id}
                  className="
                    border
                    border-gray-200
                    rounded-2xl
                    p-5
                    bg-white
                  "
                >

                  <div className="flex justify-between items-start gap-4 mb-3">

                    <div>

                      <h3 className="text-lg font-black text-[#1E293B] leading-tight">

                        {item.title}

                      </h3>

                      <p className="text-gray-700 text-sm mt-1">

                        {item.subtitle}

                      </p>

                    </div>

                    <div
                      className="
                        bg-[#1E293B]
                        text-white
                        px-4
                        py-1.5
                        rounded-full
                        text-xs
                        font-bold
                        whitespace-nowrap
                      "
                    >

                      {item.date}

                    </div>

                  </div>

                  {section.bullets ? (

                    <div className="space-y-2">

                      {item.content
                        .split("\n")
                        .filter(
                          (point) =>
                            point.trim() !== ""
                        )
                        .map((point, index) => (

                          <div
                            key={index}
                            className="flex items-start gap-3"
                          >

                            <div className="w-2 h-2 rounded-full bg-[#1E293B] mt-2"></div>

                            <p className="text-gray-800 leading-7 text-[15px]">

                              {point}

                            </p>

                          </div>

                        ))}

                    </div>

                  ) : (

                    <p className="text-gray-800 whitespace-pre-line leading-7 text-[15px]">

                      {item.content}

                    </p>

                  )}

                </div>

              ))}

            </div>

          )}

        </section>

      ))}

    </div>

  );
}