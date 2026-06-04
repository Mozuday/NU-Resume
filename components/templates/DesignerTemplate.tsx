import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function DesignerTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        bg-[#faf7f2]
        shadow-2xl
         
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
      
      {/* HERO */}

      <div
        className="relative bg-pink-500 text-white   z-10"
        style={{
          padding: `${data.padding}px`,
        }}
      >

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>

        <div className="relative z-10 flex items-center gap-10">

          {data.profilePhoto ? (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-44 h-44 rounded-[35px] object-cover border-4 border-white shadow-2xl"
            />

          ) : (

            <div className="w-44 h-44 rounded-[35px] bg-pink-300"></div>

          )}

          <div className="flex-1">

            <p className="uppercase tracking-[10px] text-pink-100 mb-4 font-semibold">

              Creative Designer

            </p>

            <h1 className="text-7xl font-black leading-none mb-6">

              {data.name || "Your Name"}

            </h1>

            <div className="space-y-2 text-pink-100 break-words">

              <p>{data.email}</p>

              <p>{data.phone}</p>

              <p>{data.address}</p>

            </div>

          </div>

        </div>

      </div>

      {/* BODY */}

      <div className="grid grid-cols-[1fr_300px] relative z-10">

        {/* LEFT */}

        <div
          className="space-y-14"
          style={{
            padding: `${data.padding}px`,
          }}
        >

          {/* SUMMARY */}

          {data.summary && (

            <section>

              <h2 className="text-5xl font-black text-pink-500 mb-8 uppercase">

                About

              </h2>

              <p className="text-gray-700 whitespace-pre-line leading-10">

                {data.summary}

              </p>

            </section>

          )}

          {/* SECTIONS */}

          {data.sections.map(
            (section) => (

              <section
                key={section.id}
              >

                <h2 className="text-5xl font-black text-pink-500 mb-8 uppercase">

                  {section.heading}

                </h2>

                {/* BASIC */}

                {section.type === "basic" && (

                  <div>

                    {section.bullets ? (

                      <div className="space-y-4">

                        {section.content
                          .split("\n")
                          .map((point, index) => (

                            <div
                              key={index}
                              className="flex items-start gap-3"
                            >

                              <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>

                              <p className="text-gray-700">
                                {point}
                              </p>

                            </div>

                          ))}

                      </div>

                    ) : (

                      <p className="text-gray-700 whitespace-pre-line leading-10">

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
                          className="bg-white border border-pink-100 rounded-[30px] p-6 shadow-sm"
                        >

                          <div className="flex justify-between items-start gap-4 mb-4">

                            <div>

                              <h3 className="text-3xl font-bold text-gray-900">

                                {item.title}

                              </h3>

                              <p className="text-pink-500 font-semibold mt-1">

                                {item.subtitle}

                              </p>

                            </div>

                            <p className="text-gray-500 whitespace-nowrap">

                              {item.date}

                            </p>

                          </div>

                          {section.bullets ? (

                            <div className="space-y-3 mt-4">

                              {item.content
                                .split("\n")
                                .map((point, index) => (

                                  <div
                                    key={index}
                                    className="flex items-start gap-3"
                                  >

                                    <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>

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

        {/* RIGHT SIDEBAR */}

        <div
          className="bg-white border-l border-pink-100"
          style={{
            padding: `${data.padding}px`,
          }}
        >

          {/* SKILLS */}

          <h2 className="text-4xl font-black text-pink-500 mb-8 uppercase">

            Skills

          </h2>

          <div className="space-y-4">

            {data.skills.map(
              (skill, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3 bg-pink-50 border border-pink-100 rounded-3xl px-5 py-4"
                >

                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>

                  <p className="text-gray-800 font-medium">
                    {skill}
                  </p>

                </div>

              )
            )}

          </div>

          {/* EXTRA */}

          <div className="mt-14 bg-pink-50 rounded-[30px] p-8 border border-pink-100">

            <h3 className="text-3xl font-black text-pink-500 mb-6 uppercase">

              Portfolio

            </h3>

            <div className="space-y-4">

              <div className="h-24 rounded-2xl bg-pink-200"></div>

              <div className="h-24 rounded-2xl bg-pink-300"></div>

              <div className="h-24 rounded-2xl bg-pink-400"></div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}