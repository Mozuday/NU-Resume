"use client";

import { ResumeData } from "../types/resume";

import CreativeTemplate from "./templates/CreativeTemplate";
import BusinessTemplate from "./templates/BusinessTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import DarkTemplate from "./templates/DarkTemplate";
import ElegantTemplate from "./templates/ElegantTemplate";
import CorporateTemplate from "./templates/CorporateTemplate";
import CompactTemplate from "./templates/CompactTemplate";
import GradientTemplate from "./templates/GradientTemplate";
import DeveloperTemplate from "./templates/DeveloperTemplate";
import DesignerTemplate from "./templates/DesignerTemplate";
import StudentTemplate from "./templates/StudentTemplate";
import ExecutiveTemplate from "./templates/ExecutiveTemplate";
import LuxuryTemplate from "./templates/LuxuryTemplate";
import StartupTemplate from "./templates/StartupTemplate";
import TechTemplate from "./templates/TechTemplate";
import ATSModernTemplate from "./templates/ATSModernTemplate";
import SimpleTemplate from "./templates/SimpleTemplate";

interface Props {
  data: ResumeData;
}

export default function ResumePreview({ data }: Props) {
  const renderTemplate = () => {
    switch (data.template) {
      case "Creative":
        return <CreativeTemplate data={data} />;

      case "Business":
        return <BusinessTemplate data={data} />;

      case "Classic":
        return <ClassicTemplate data={data} />;

      case "Professional":
        return <ProfessionalTemplate data={data} />;

      case "Minimal":
        return <MinimalTemplate data={data} />;

      case "Dark":
        return <DarkTemplate data={data} />;

      case "Elegant":
        return <ElegantTemplate data={data} />;

      case "Corporate":
        return <CorporateTemplate data={data} />;

      case "Compact":
        return <CompactTemplate data={data} />;

      case "Gradient":
        return <GradientTemplate data={data} />;

      case "Developer":
        return <DeveloperTemplate data={data} />;

      case "Designer":
        return <DesignerTemplate data={data} />;

      case "Student":
        return <StudentTemplate data={data} />;

      case "Executive":
        return <ExecutiveTemplate data={data} />;

      case "Luxury":
        return <LuxuryTemplate data={data} />;

      case "Startup":
        return <StartupTemplate data={data} />;

      case "Tech":
        return <TechTemplate data={data} />;

      case "ATSModern":
        return <ATSModernTemplate data={data} />;

      case "Simple":
        return <SimpleTemplate data={data} />;

      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="w-full overflow-x-auto py-4">
      <div
        id="resume-content"
        className="
          bg-white
          shadow-2xl
          print:shadow-none
          mx-auto
          w-full
          max-w-[210mm]
          rounded-lg
        "
        style={{
          minHeight: "297mm",
          padding: `${data.padding}px`,
          fontSize: `${data.fontSize}px`,
          boxSizing: "border-box",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
}