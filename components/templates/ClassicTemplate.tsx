import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function ClassicTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        relative
        bg-[#fffdf8]
        text-black
        w-full
        h-full
         

        [&_p]:text-inherit
        [&_li]:text-inherit
        [&_span]:text-inherit
      "
      style={{
        padding: `${data.padding}px`,
        fontSize: `${data.fontSize}px`,
        lineHeight: 1.7,
        fontFamily: "Georgia, serif",
      }}
    >

      {/* HEADER */}

      <div className="text-center border-b-[3px] border-[#7A4E2D] pb-6 mb-8 relative z-10">

        <h1 className="text-4xl font-bold uppercase tracking-[4px] text-[#5A3720] mb-3 leading-tight">

          {data.name || "Your Name"}

        </h1>

        <div className="flex flex-wrap justify-center gap-3 text-gray-700 text-sm">

          {data.phone && (
            <p>{data.phone}</p>
          )}

          {data.phone && data.email && (
            <span>•</span>
          )}

          {data.email && (
            <p>{data.email}</p>
          )}

          {(data.phone || data.email) && data.address && (
            <span>•</span>
          )}

          {data.address && (
            <p>{data.address}</p>
          )}

        </div>

      </div>

      {/* PHOTO */}

      {data.profilePhoto && (

        <div className="flex justify-center mb-8 relative z-10">

          <img
            src={data.profilePhoto}
            alt="Profile"
            className="
              w-28
              h-28
              rounded-full
              object-cover
              border-[4px]
              border-[#7A4E2D]
            "
          />

        </div>

      )}

      {/* SUMMARY */}

      {data.summary && (

        <section className="mb-8 relative z-10">

          <h2
            className="
              text-xl
              font-bold
              uppercase
              tracking-[2px]
              text-[#7A4E2D]
              border-b-2
              border-[#7A4E2D]
              pb-2
              mb-4
            "
          >

            Career Objective

          </h2>

          <p className="text-gray-800 whitespace-pre-line text-justify leading-7 text-[15px]">

            {data.summary}

          </p>

        </section>

      )}

      {/* SKILLS */}

      {data.skills.length > 0 && (

        <section className="mb-8 relative z-10">

          <h2
            className="
              text-xl
              font-bold
              uppercase
              tracking-[2px]
              text-[#7A4E2D]
              border-b-2
              border-[#7A4E2D]
              pb-2
              mb-4
            "
          >

            Skills

          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2">

            {data.skills.map((skill, index) => (

              <div
                key={index}
                className="flex items-start gap-2"
              >

                <div className="w-2 h-2 rounded-full bg-[#7A4E2D] mt-2"></div>

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
          className="mb-8 relative z-10"
        >

          <h2
            className="
              text-xl
              font-bold
              uppercase
              tracking-[2px]
              text-[#7A4E2D]
              border-b-2
              border-[#7A4E2D]
              pb-2
              mb-4
            "
          >

            {section.heading}

          </h2>

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

                        <div className="w-2 h-2 rounded-full bg-[#7A4E2D] mt-2"></div>

                        <p className="text-gray-800 leading-7 text-[15px]">

                          {point}

                        </p>

                      </div>

                    ))}

                </div>

              ) : (

                <p className="text-gray-800 whitespace-pre-line text-justify leading-7 text-[15px]">

                  {section.content}

                </p>

              )}

            </div>

          )}

          {/* ADVANCED */}

          {section.type === "advanced" && (

            <div className="space-y-6">

              {section.items.map((item) => (

                <div
                  key={item.id}
                  className="pb-5 border-b border-gray-300"
                >

                  <div className="flex justify-between items-start gap-4 mb-2">

                    <div>

                      <h3 className="text-lg font-bold text-[#5A3720] leading-tight">

                        {item.title}

                      </h3>

                      <p className="italic text-gray-700 text-sm mt-1">

                        {item.subtitle}

                      </p>

                    </div>

                    <p className="text-gray-600 text-sm whitespace-nowrap">

                      {item.date}

                    </p>

                  </div>

                  {section.bullets ? (

                    <div className="space-y-2 mt-3">

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

                            <div className="w-2 h-2 rounded-full bg-[#7A4E2D] mt-2"></div>

                            <p className="text-gray-800 leading-7 text-[15px]">

                              {point}

                            </p>

                          </div>

                        ))}

                    </div>

                  ) : (

                    <p className="text-gray-800 whitespace-pre-line text-justify leading-7 text-[15px] mt-3">

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