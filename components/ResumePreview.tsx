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

  const templateProps = { data };

  const renderTemplate = () => {

    switch (data.template) {

      case "Creative":
        return <CreativeTemplate {...templateProps} />;

      case "Business":
        return <BusinessTemplate {...templateProps} />;

      case "Classic":
        return <ClassicTemplate {...templateProps} />;

      case "Professional":
        return <ProfessionalTemplate {...templateProps} />;

      case "Minimal":
        return <MinimalTemplate {...templateProps} />;

      case "Dark":
        return <DarkTemplate {...templateProps} />;

      case "Elegant":
        return <ElegantTemplate {...templateProps} />;

      case "Corporate":
        return <CorporateTemplate {...templateProps} />;

      case "Compact":
        return <CompactTemplate {...templateProps} />;

      case "Gradient":
        return <GradientTemplate {...templateProps} />;

      case "Developer":
        return <DeveloperTemplate {...templateProps} />;

      case "Designer":
        return <DesignerTemplate {...templateProps} />;

      case "Student":
        return <StudentTemplate {...templateProps} />;

      case "Executive":
        return <ExecutiveTemplate {...templateProps} />;

      case "Luxury":
        return <LuxuryTemplate {...templateProps} />;

      case "Startup":
        return <StartupTemplate {...templateProps} />;

      case "Tech":
        return <TechTemplate {...templateProps} />;

      case "ATSModern":
        return <ATSModernTemplate {...templateProps} />;

      case "Simple":
        return <SimpleTemplate {...templateProps} />;

      default:
        return <ModernTemplate {...templateProps} />;
    }
  };

  return (
    <div className="w-full overflow-x-auto py-4">

      <div
        id="resume-content"
        className="
          bg-white
          shadow-2xl
          mx-auto
          w-full
          max-w-[210mm]
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