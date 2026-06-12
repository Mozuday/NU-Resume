"use client";

import AdsterraBanner from "../../components/AdsterraBanner";

import { useState } from "react";

import ResumePreview from "../../components/ResumePreview";

import {
  ResumeData,
  BasicSection,
  AdvancedSection,
} from "../../types/resume";

export default function BuilderPage() {

  const [formData, setFormData] =
    useState<ResumeData>({
      name: "",
      email: "",
      phone: "",
      address: "",
      summary: "",

      profilePhoto: "",

      template: "Modern",

      skills: [],

      padding: 40,
      fontSize: 16,

      sections: [],
    });

  // ======================================================
  // INPUTS
  // ======================================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // ======================================================
  // PHOTO
  // ======================================================

  const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      e.target.files?.[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onloadend = () => {

      setFormData({
        ...formData,
        profilePhoto:
          reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  };

  // ======================================================
  // SKILLS
  // ======================================================

  const handleSkills = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {

    const skills =
      e.target.value
        .split("\n")
        .filter(
          (skill) =>
            skill.trim() !== ""
        );

    setFormData({
      ...formData,
      skills,
    });
  };

  // ======================================================
  // ADD BASIC SECTION
  // ======================================================

  const addBasicSection = () => {

    const newSection: BasicSection = {

      id: Date.now(),

      type: "basic",

      heading: "",

      content: "",

      bullets: true,
    };

    setFormData({
      ...formData,

      sections: [
        ...formData.sections,
        newSection,
      ],
    });
  };

  // ======================================================
  // ADD ADVANCED SECTION
  // ======================================================

  const addAdvancedSection = () => {

    const newSection: AdvancedSection = {

      id: Date.now(),

      type: "advanced",

      heading: "",

      organization: "",
      date: "",

      title: "",
      subtitle: "",
      content: "",

      bullets: true,

      items: [],
    };

    setFormData({
      ...formData,

      sections: [
        ...formData.sections,
        newSection,
      ],
    });
  };

  // ======================================================
  // REMOVE SECTION
  // ======================================================

  const removeSection = (
    id: number
  ) => {

    setFormData({
      ...formData,

      sections:
        formData.sections.filter(
          (section) =>
            section.id !== id
        ),
    });
  };

  // ======================================================
  // UPDATE SECTION
  // ======================================================

  const updateSection = (
    id: number,
    field: string,
    value:
      string | boolean
  ) => {

    const updated =
      formData.sections.map(
        (section) => {

          if (
            section.id === id
          ) {

            return {
              ...section,
              [field]: value,
            };
          }

          return section;
        }
      );

    setFormData({
      ...formData,
      sections: updated,
    });
  };

  // ======================================================
  // ADD ADVANCED ITEM
  // ======================================================

  const addAdvancedItem = (
    sectionId: number
  ) => {

    const updated =
      formData.sections.map(
        (section) => {

          if (
            section.id === sectionId &&
            section.type === "advanced"
          ) {

            return {
              ...section,

              items: [
                ...section.items,

                {
                  id: Date.now(),

                  title: "",
                  subtitle: "",
                  date: "",

                  content: "",
                },
              ],
            };
          }

          return section;
        }
      );

    setFormData({
      ...formData,
      sections: updated,
    });
  };

  // ======================================================
  // UPDATE ADVANCED ITEM
  // ======================================================

  const updateAdvancedItem = (
    sectionId: number,
    itemId: number,
    field: string,
    value: string
  ) => {

    const updated =
      formData.sections.map(
        (section) => {

          if (
            section.id === sectionId &&
            section.type === "advanced"
          ) {

            return {
              ...section,

              items:
                section.items.map(
                  (item) => {

                    if (
                      item.id === itemId
                    ) {

                      return {
                        ...item,
                        [field]:
                          value,
                      };
                    }

                    return item;
                  }
                ),
            };
          }

          return section;
        }
      );

    setFormData({
      ...formData,
      sections: updated,
    });
  };

  // ======================================================
  // REMOVE ADVANCED ITEM
  // ======================================================

  const removeAdvancedItem = (
    sectionId: number,
    itemId: number
  ) => {

    const updated =
      formData.sections.map(
        (section) => {

          if (
            section.id === sectionId &&
            section.type === "advanced"
          ) {

            return {
              ...section,

              items:
                section.items.filter(
                  (item) =>
                    item.id !== itemId
                ),
            };
          }

          return section;
        }
      );

    setFormData({
      ...formData,
      sections: updated,
    });
  };

  // ======================================================
  // DOWNLOAD
  // ======================================================

  
  const downloadResume = () => {

    window.print();
  };

  // ======================================================
  // WATCH AD
  // ======================================================

 const handleWatchAd = () => {
  const script = document.createElement("script");

  script.src =
    "https://pl29711191.effectivecpmnetwork.com/c1/97/d1/c197d125088c0a54790f03fcef24135f.js";

  document.body.appendChild(script);

  setTimeout(() => {
    downloadResume();
  }, 1000);
};

  // ======================================================
  // PAYMENT
  // ======================================================

  const handlePayment = () => {

    const options = {

      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: 1900,

      currency: "INR",

      name: "NUResume",

      description:
        "Resume Download",

      handler: function (response: any) {

  console.log(response);

  downloadResume();
  },

      theme: {
        color: "#000000",
      },
    };

    const razor =
      new (window as any)
        .Razorpay(options);

    razor.open();
  };

  return (

    <main className="min-h-screen bg-gray-100 p-4 lg:p-8">

      <div className="max-w-7xl mx-auto flex flex-col xl:grid xl:grid-cols-2 gap-8">

        {/* ======================================================
            LEFT PANEL
        ====================================================== */}

        <div className="bg-white rounded-[32px] shadow-xl p-6 lg:p-8 space-y-6 no-print">

          <div>

            <h1 className="text-4xl font-black">
              NUResume Builder
            </h1>

            <p className="text-gray-500 mt-2">
              Build ATS-friendly resumes
            </p>

          </div>

          {/* TEMPLATE */}

          <select
            value={
              formData.template
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                template:
                  e.target.value,
              })
            }
            className="w-full border rounded-2xl p-4"
          >

            <option>Modern</option>
            <option>Minimal</option>
            <option>Corporate</option>
            <option>Creative</option>
            <option>Elegant</option>
            <option>Professional</option>
            <option>Dark</option>
            <option>Classic</option>
            <option>Gradient</option>
            <option>Compact</option>
            <option>Developer</option>
            <option>Executive</option>
            <option>Designer</option>
            <option>Startup</option>
            <option>Luxury</option>
            <option>Tech</option>
            <option>Student</option>
            <option>Simple</option>
            <option>ATSModern</option>
            <option>Business</option>

          </select>

          {/* INPUTS */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border rounded-2xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border rounded-2xl p-4"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border rounded-2xl p-4"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full border rounded-2xl p-4"
          />

          <textarea
            rows={5}
            name="summary"
            placeholder="Professional Summary"
            onChange={handleChange}
            className="w-full border rounded-2xl p-4"
          />

          {/* PHOTO */}

          <input
            type="file"
            accept="image/*"
            onChange={
              handlePhotoUpload
            }
            className="w-full border rounded-2xl p-4"
          />

          {/* SKILLS */}

          <textarea
            rows={5}
            placeholder={`React\nNext.js\nTailwind CSS`}
            onChange={
              handleSkills
            }
            className="w-full border rounded-2xl p-4"
          />

          {/* SLIDERS */}

          <div>

            <p className="font-bold mb-2">
              Page Padding
            </p>

            <input
              type="range"
              min="20"
              max="80"
              value={
                formData.padding
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  padding:
                    Number(
                      e.target
                        .value
                    ),
                })
              }
              className="w-full"
            />

          </div>

          <div>

            <p className="font-bold mb-2">
              Font Size
            </p>

            <input
              type="range"
              min="12"
              max="22"
              value={
                formData.fontSize
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fontSize:
                    Number(
                      e.target
                        .value
                    ),
                })
              }
              className="w-full"
            />

          </div>

          {/* ADD BUTTONS */}

          <div className="grid grid-cols-2 gap-4">

            <button
              onClick={
                addBasicSection
              }
              className="bg-black text-white py-4 rounded-2xl font-bold"
            >
              Add Basic
            </button>

            <button
              onClick={
                addAdvancedSection
              }
              className="bg-black text-white py-4 rounded-2xl font-bold"
            >
              Add Advanced
            </button>

          </div>

          {/* SECTIONS */}

          {formData.sections.map(
            (section) => (

              <div
                key={section.id}
                className="bg-gray-50 border rounded-3xl p-5 space-y-5"
              >

                <div className="flex justify-between items-center">

                  <h2 className="text-2xl font-black">
                    {section.heading ||
                      "Untitled Section"}
                  </h2>

                  <button
                    onClick={() =>
                      removeSection(
                        section.id
                      )
                    }
                    className="text-red-500"
                  >
                    Remove
                  </button>

                </div>

                <input
                  type="text"
                  placeholder="Section Heading"
                  value={
                    section.heading
                  }
                  onChange={(e) =>
                    updateSection(
                      section.id,
                      "heading",
                      e.target.value
                    )
                  }
                  className="w-full border rounded-2xl p-4"
                />

                {/* BASIC */}

                {section.type ===
                  "basic" && (

                  <textarea
                    rows={6}
                    value={
                      section.content
                    }
                    onChange={(e) =>
                      updateSection(
                        section.id,
                        "content",
                        e.target.value
                      )
                    }
                    placeholder="One point per line..."
                    className="w-full border rounded-2xl p-4"
                  />

                )}

                {/* ADVANCED */}

                {section.type ===
                  "advanced" && (

                  <div className="space-y-5">

                    {section.items.map(
                      (item) => (

                        <div
                          key={item.id}
                          className="bg-white border rounded-2xl p-5 space-y-4"
                        >

                          <input
                            type="text"
                            placeholder="Title"
                            value={
                              item.title
                            }
                            onChange={(e) =>
                              updateAdvancedItem(
                                section.id,
                                item.id,
                                "title",
                                e.target.value
                              )
                            }
                            className="w-full border rounded-2xl p-4"
                          />

                          <input
                            type="text"
                            placeholder="Subtitle"
                            value={
                              item.subtitle
                            }
                            onChange={(e) =>
                              updateAdvancedItem(
                                section.id,
                                item.id,
                                "subtitle",
                                e.target.value
                              )
                            }
                            className="w-full border rounded-2xl p-4"
                          />

                          <input
                            type="text"
                            placeholder="Date"
                            value={
                              item.date
                            }
                            onChange={(e) =>
                              updateAdvancedItem(
                                section.id,
                                item.id,
                                "date",
                                e.target.value
                              )
                            }
                            className="w-full border rounded-2xl p-4"
                          />

                          <textarea
                            rows={5}
                            value={
                              item.content
                            }
                            onChange={(e) =>
                              updateAdvancedItem(
                                section.id,
                                item.id,
                                "content",
                                e.target.value
                              )
                            }
                            placeholder="One point per line..."
                            className="w-full border rounded-2xl p-4"
                          />

                          <button
                            onClick={() =>
                              removeAdvancedItem(
                                section.id,
                                item.id
                              )
                            }
                            className="text-red-500"
                          >
                            Remove Item
                          </button>

                        </div>

                      )
                    )}

                    <button
                      onClick={() =>
                        addAdvancedItem(
                          section.id
                        )
                      }
                      className="bg-black text-white px-6 py-3 rounded-2xl font-bold"
                    >
                      Add Item
                    </button>

                  </div>

                )}

              </div>

            )
          )}

          {/* DOWNLOAD */}

          <p className="text-center text-gray-500 text-sm">
Choose premium download or unlock one free download by watching an ad.
</p>

          <div className="space-y-4 pt-4">

            <button
              onClick={
                handlePayment
              }
              className="w-full bg-black text-white py-5 rounded-2xl text-lg font-black"
            >
              Pay ₹19 • Instant Download
            </button>

            <button
              onClick={
                handleWatchAd
              }
              className="w-full border border-black py-5 rounded-2xl text-lg font-black"
            >
              Watch Ad • Free Download
            </button>

            <AdsterraBanner />

          </div>

        </div>

        {/* ======================================================
            RIGHT PANEL
        ====================================================== */}

        <div className="xl:sticky xl:top-5 h-fit">

          <ResumePreview
            data={formData}

          />

        </div>

      </div>

    </main>
  );
}