import CertificationPage from "../../components/CertificationPage";

export default function IATF16949() {
  return (
    <CertificationPage
      title="IATF 16949:2016 – Automotive Quality Management System"
      description="IATF 16949:2016 is the internationally recognized Quality Management System standard specifically developed for the automotive industry. It integrates ISO 9001 requirements with additional automotive-specific requirements to enhance product quality, reduce waste, prevent defects, and improve efficiency throughout the supply chain. The standard is applicable to organizations involved in automotive production, service parts manufacturing, and related support functions."
      
      benefits={[
        "Improved product quality and consistency",
        "Enhanced customer satisfaction",
        "Defect prevention and risk reduction",
        "Reduced operational waste and costs",
        "Improved supply chain performance",
        "Global recognition in the automotive sector",
        "Better process control and efficiency",
        "Compliance with OEM requirements",
        "Increased business opportunities",
        "Continuous improvement culture"
      ]}

      whoNeeds={[
        "Automotive Manufacturers",
        "Auto Component Suppliers",
        "OEM Vendors",
        "Tier 1 & Tier 2 Suppliers",
        "Automotive Engineering Companies",
        "Automotive Assembly Plants",
        "Vehicle Parts Manufacturers",
        "Organizations supplying products or services to the automotive industry"
      ]}
    />
  );
}