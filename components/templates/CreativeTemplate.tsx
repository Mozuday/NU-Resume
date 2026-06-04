import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function CreativeTemplate({
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
          
         
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.6,
      }}
    >

      {/* TOP HEADER */}

      <div
        className="relative bg-orange-500 text-white   z-10"
        style={{
          padding: `${data.padding}px`,
        }}
      >

        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>

        <div className="relative z-10 flex items-center gap-8">

          {data.profilePhoto ? (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-40 h-40 rounded-3xl object-cover border-4 border-white shadow-2xl"
            />

          ) : (

            <div className="w-40 h-40 rounded-3xl bg-orange-200"></div>

          )}

          <div>

            <h1 className="text-6xl font-black mb-4">

              {data.name || "Your Name"}

            </h1>

            <div className="space-y-2 opacity-90 break-words">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

        </div>

      </div>

      {/* BODY */}

      <div className="grid grid-cols-[1fr_280px] relative z-10">

        {/* LEFT */}

        <div
          style={{
            padding: `${data.padding}px`,
          }}
        >

          {/* SUMMARY */}

          {data.summary && (

            <section className="mb-12">

              <h2 className="text-4xl font-black text-orange-500 mb-6 uppercase">

                About Me

              </h2>

              <p className="text-gray-700 whitespace-pre-line leading-8">

                {data.summary}

              </p>

            </section>

          )}

          {/* SECTIONS */}

          {data.sections.map(
            (section) => (

              <section
                key={section.id}
                className="mb-12"
              >

                <h2 className="text-4xl font-black text-orange-500 mb-6 uppercase">

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

                              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>

                              <p className="text-gray-700">
                                {point}
                              </p>

                            </div>

                          ))}

                      </div>

                    ) : (

                      <p className="text-gray-700 whitespace-pre-line leading-8">

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
                          className="border-l-4 border-orange-500 pl-5"
                        >

                          <div className="flex justify-between items-start gap-4 mb-3">

                            <div>

                              <h3 className="text-2xl font-bold text-black">

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

                                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>

                                    <p className="text-gray-700">
                                      {point}
                                    </p>

                                  </div>

                                ))}

                            </div>

                          ) : (

                            <p className="text-gray-700 whitespace-pre-line leading-8 mt-4">

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

        {/* RIGHT SIDEBAR */}

        <div
          className="bg-orange-50 border-l border-orange-100"
          style={{
            padding: `${data.padding}px`,
          }}
        >

          <h2 className="text-3xl font-black text-orange-500 mb-8 uppercase">

            Skills

          </h2>

          <div className="space-y-4">

            {data.skills.map(
              (skill, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3 bg-white border border-orange-200 rounded-2xl px-5 py-4 shadow-sm"
                >

                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>

                  <p className="text-gray-800 font-medium">
                    {skill}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>

  );
}