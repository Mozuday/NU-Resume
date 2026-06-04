import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function CompactTemplate({
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
          
         
        padding: `${data.padding}px`,
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.5,
      }}
    >
      {/* HEADER */}

      <div className="flex items-center justify-between border-b-4 border-indigo-600 pb-6 mb-8 gap-6">

        <div className="flex-1">

          <h1 className="text-5xl font-black text-indigo-700 mb-3">

            {data.name || "Your Name"}

          </h1>

          <div className="flex flex-wrap gap-5 text-gray-700">

            <p>{data.email}</p>

            <p>{data.phone}</p>

            <p>{data.address}</p>

          </div>

        </div>

        {data.profilePhoto ? (

          <img
            src={data.profilePhoto}
            alt="Profile"
            className="w-28 h-28 rounded-2xl object-cover border-4 border-indigo-600"
          />

        ) : (

          <div className="w-28 h-28 rounded-2xl bg-indigo-100"></div>

        )}

      </div>

      {/* SUMMARY */}

      {data.summary && (

        <section className="mb-8">

          <h2 className="text-2xl font-black text-indigo-700 uppercase mb-4">

            Summary

          </h2>

          <p className="text-gray-800 whitespace-pre-line leading-7">

            {data.summary}

          </p>

        </section>

      )}

      {/* SKILLS */}

      {data.skills.length > 0 && (

        <section className="mb-8">

          <h2 className="text-2xl font-black text-indigo-700 uppercase mb-4">

            Skills

          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2">

            {data.skills.map(
              (skill, index) => (

                <div
                  key={index}
                  className="flex items-start gap-2"
                >

                  <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2"></div>

                  <p className="text-gray-800">
                    {skill}
                  </p>

                </div>

              )
            )}

          </div>

        </section>

      )}

      {/* SECTIONS */}

      <div className="grid grid-cols-2 gap-6">

        {data.sections.map(
          (section) => (

            <section
              key={section.id}
              className="border border-gray-200 rounded-2xl p-5"
            >

              <h2 className="text-xl font-black text-indigo-700 mb-4 uppercase">

                {section.heading}

              </h2>

              {/* BASIC */}

              {section.type === "basic" && (

                <div>

                  {section.bullets ? (

                    <div className="space-y-2">

                      {section.content
                        .split("\n")
                        .map((point, index) => (

                          <div
                            key={index}
                            className="flex items-start gap-2"
                          >

                            <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2"></div>

                            <p className="text-gray-800">
                              {point}
                            </p>

                          </div>

                        ))}

                    </div>

                  ) : (

                    <p className="text-gray-800 whitespace-pre-line leading-7">

                      {section.content}

                    </p>

                  )}

                </div>

              )}

              {/* ADVANCED */}

              {section.type === "advanced" && (

                <div className="space-y-5">

                  {section.items.map(
                    (item) => (

                      <div
                        key={item.id}
                        className="border-l-4 border-indigo-600 pl-4"
                      >

                        <div className="flex justify-between items-start gap-4 mb-2">

                          <div>

                            <h3 className="text-lg font-bold text-black">

                              {item.title}

                            </h3>

                            <p className="text-gray-700">

                              {item.subtitle}

                            </p>

                          </div>

                          <p className="text-sm text-gray-500 whitespace-nowrap">

                            {item.date}

                          </p>

                        </div>

                        {section.bullets ? (

                          <div className="space-y-2 mt-3">

                            {item.content
                              .split("\n")
                              .map((point, index) => (

                                <div
                                  key={index}
                                  className="flex items-start gap-2"
                                >

                                  <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2"></div>

                                  <p className="text-gray-800">
                                    {point}
                                  </p>

                                </div>

                              ))}

                          </div>

                        ) : (

                          <p className="text-gray-800 whitespace-pre-line leading-7 mt-3">

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