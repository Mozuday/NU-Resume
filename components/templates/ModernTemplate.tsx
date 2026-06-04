import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
}

export default function ModernTemplate({
  data,
}: Props) {
  return (
    <div
      className="
        relative

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

        <div className="bg-black text-white rounded-b-[40px] p-6 md:p-10 mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-5 leading-none break-words">
                {data.name || "Your Name"}
              </h1>

              <div className="space-y-2 text-gray-300">
                {data.email && <p>{data.email}</p>}
                {data.phone && <p>{data.phone}</p>}
                {data.address && <p>{data.address}</p>}
              </div>
            </div>

            {data.profilePhoto && (
              <img
                src={data.profilePhoto}
                alt="Profile"
                className="
                  w-28 h-28
                  md:w-40 md:h-40
                  rounded-full
                  object-cover
                  border-4
                  border-white
                  flex-shrink-0
                "
              />
            )}
          </div>
        </div>

        {/* SUMMARY */}

        {data.summary && (
          <section className="mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-12 bg-black rounded-full"></div>

              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Summary
              </h2>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8">
              <p className="text-gray-700 whitespace-pre-line">
                {data.summary}
              </p>
            </div>
          </section>
        )}

        {/* SKILLS */}

        {data.skills.length > 0 && (
          <section className="mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-12 bg-black rounded-full"></div>

              <h2 className="text-2xl md:text-3xl font-black uppercase">
                Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-black mt-2"></div>

                  <p className="text-gray-700 font-medium">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CUSTOM SECTIONS */}

        {data.sections.map((section) => (
          <section
            key={section.id}
            className="mb-10 md:mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-12 bg-black rounded-full"></div>

              <h2 className="text-2xl md:text-3xl font-black uppercase break-words">
                {section.heading}
              </h2>
            </div>

            {/* BASIC */}

            {section.type === "basic" && (
              <>
                {section.bullets ? (
                  <div className="space-y-3">
                    {section.content
                      .split("\n")
                      .filter((point) => point.trim() !== "")
                      .map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <div className="w-3 h-3 rounded-full bg-black mt-2"></div>

                          <p className="text-gray-700">
                            {point}
                          </p>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8">
                    <p className="text-gray-700 whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* ADVANCED */}

            {section.type === "advanced" && (
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="
                      resume-item
                      border
                      border-gray-200
                      rounded-3xl
                      p-6
                      md:p-8
                    "
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-black break-words">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 mt-1 font-medium">
                          {item.subtitle}
                        </p>
                      </div>

                      {item.date && (
                        <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap w-fit">
                          {item.date}
                        </div>
                      )}
                    </div>

                    {section.bullets ? (
                      <div className="space-y-3">
                        {item.content
                          .split("\n")
                          .filter((point) => point.trim() !== "")
                          .map((point, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3"
                            >
                              <div className="w-3 h-3 rounded-full bg-black mt-2"></div>

                              <p className="text-gray-700">
                                {point}
                              </p>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <p className="text-gray-700 whitespace-pre-line">
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