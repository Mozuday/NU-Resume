import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function MinimalTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        mx-auto
        bg-white
         
        shadow-xl

        [&_p]:text-inherit
        [&_li]:text-inherit
        [&_span]:text-inherit
      "
      style={{
          
         
        padding: `${data.padding}px`,
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.8,
      }}
    >

      {/* HEADER */}

      <div className="border-b border-gray-300 pb-10 mb-12">

        <div className="flex items-center justify-between gap-8">

          <div className="flex-1">

            <h1 className="text-6xl font-thin tracking-wide text-gray-900 mb-5">

              {data.name || "Your Name"}

            </h1>

            <div className="space-y-2 text-gray-500 font-light">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

          {data.profilePhoto && (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover grayscale border border-gray-300"
            />

          )}

        </div>

      </div>

      {/* SUMMARY */}

      {data.summary && (

        <section className="mb-14">

          <div className="flex items-center gap-5 mb-6">

            <div className="w-14 h-[1px] bg-gray-400"></div>

            <h2 className="text-2xl uppercase tracking-[8px] text-gray-800 font-light">

              Summary

            </h2>

          </div>

          <p className="text-gray-700 leading-9 font-light whitespace-pre-line">

            {data.summary}

          </p>

        </section>

      )}

      {/* SKILLS */}

      {data.skills.length > 0 && (

        <section className="mb-14">

          <div className="flex items-center gap-5 mb-6">

            <div className="w-14 h-[1px] bg-gray-400"></div>

            <h2 className="text-2xl uppercase tracking-[8px] text-gray-800 font-light">

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

                  <div className="w-2 h-2 rounded-full bg-gray-500 mt-2"></div>

                  <p className="text-gray-700 font-light">
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
            className="mb-14"
          >

            <div className="flex items-center gap-5 mb-6">

              <div className="w-14 h-[1px] bg-gray-400"></div>

              <h2 className="text-2xl uppercase tracking-[8px] text-gray-800 font-light">

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

                          <div className="w-2 h-2 rounded-full bg-gray-500 mt-2"></div>

                          <p className="text-gray-700 font-light">
                            {point}
                          </p>

                        </div>

                      ))}

                  </div>

                ) : (

                  <p className="text-gray-700 leading-9 font-light whitespace-pre-line">

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
                      className="border-b border-gray-200 pb-6"
                    >

                      <div className="flex items-start justify-between gap-6 mb-4">

                        <div>

                          <h3 className="text-2xl font-medium text-gray-900">

                            {item.title}

                          </h3>

                          <p className="text-gray-500 mt-1 font-light">

                            {item.subtitle}

                          </p>

                        </div>

                        <p className="text-gray-400 font-light whitespace-nowrap">

                          {item.date}

                        </p>

                      </div>

                      {section.bullets ? (

                        <div className="space-y-3">

                          {item.content
                            .split("\n")
                            .map((point, index) => (

                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >

                                <div className="w-2 h-2 rounded-full bg-gray-500 mt-2"></div>

                                <p className="text-gray-700 font-light">
                                  {point}
                                </p>

                              </div>

                            ))}

                        </div>

                      ) : (

                        <p className="text-gray-700 leading-9 font-light whitespace-pre-line">

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

  );
}