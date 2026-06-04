import { ResumeData } from "../../types/resume";

interface Props {
  data: ResumeData;
   
}

export default function ATSModernTemplate({
  data,
 
}: Props) {

  return (

    <div
      className="
        resume-page
        bg-white
        text-black
        relative
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

      {/* HEADER */}

      <div className="border-b-[2px] border-black pb-6 mb-8 relative z-10">

        <div className="flex justify-between items-start gap-6">

          <div className="flex-1">

            <h1 className="text-4xl font-black uppercase tracking-wide mb-3 leading-tight">

              {data.name || "Your Name"}

            </h1>

            <div className="w-20 h-[3px] bg-black mb-4"></div>

            <div className="space-y-1 text-gray-700 text-sm">

              {data.address && (
                <p>{data.address}</p>
              )}

              <p>

                {data.phone}

                {data.phone && data.email && " • "}

                {data.email}

              </p>

            </div>

          </div>

          {data.profilePhoto && (

            <img
              src={data.profilePhoto}
              alt="Profile"
              className="
                w-28
                h-28
                object-cover
                rounded-lg
                border-2
                border-black
              "
            />

          )}

        </div>

      </div>

      {/* SUMMARY */}

      {data.summary && (

        <section className="mb-8 relative z-10">

          <h2
            className="
              text-xl
              font-black
              uppercase
              tracking-wide
              border-b
              border-gray-400
              pb-2
              mb-4
            "
          >

            Professional Summary

          </h2>

          <p className="leading-7 text-gray-800 whitespace-pre-line text-[15px]">

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
              font-black
              uppercase
              tracking-wide
              border-b
              border-gray-400
              pb-2
              mb-4
            "
          >

            Skills

          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2">

            {data.skills.map(
              (skill, index) => (

                <div
                  key={index}
                  className="flex items-start gap-2"
                >

                  <div className="w-2 h-2 rounded-full bg-black mt-2"></div>

                  <p className="text-gray-800 text-[15px]">
                    {skill}
                  </p>

                </div>

              )
            )}

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
              font-black
              uppercase
              tracking-wide
              border-b
              border-gray-400
              pb-2
              mb-4
            "
          >

            {section.heading}

          </h2>

          {/* BASIC SECTION */}

          {section.type === "basic" && (

            <div>

              {section.bullets ? (

                <ul className="space-y-2">

                  {section.content
                    .split("\n")
                    .filter(
                      (item) =>
                        item.trim() !== ""
                    )
                    .map((item, index) => (

                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <div className="w-2 h-2 rounded-full bg-black mt-2"></div>

                        <p className="text-gray-800 leading-7 text-[15px]">

                          {item}

                        </p>

                      </li>

                    ))}

                </ul>

              ) : (

                <p className="text-gray-800 leading-7 whitespace-pre-line text-[15px]">

                  {section.content}

                </p>

              )}

            </div>

          )}

          {/* ADVANCED SECTION */}

          {section.type === "advanced" && (

            <div className="space-y-6">

              {section.items.map((item) => (

                <div
                  key={item.id}
                  className="border-l-[3px] border-black pl-5"
                >

                  <div className="flex justify-between items-start gap-4 mb-2">

                    <div>

                      <h3 className="text-lg font-bold leading-tight">

                        {item.title}

                      </h3>

                      <p className="text-gray-700 text-sm mt-1">

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

                            <div className="w-2 h-2 rounded-full bg-black mt-2"></div>

                            <p className="text-gray-800 leading-7 text-[15px]">

                              {point}

                            </p>

                          </div>

                        ))}

                    </div>

                  ) : (

                    <p className="leading-7 text-gray-800 whitespace-pre-line mt-3 text-[15px]">

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