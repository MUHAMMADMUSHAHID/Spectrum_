import CertificationPage from "../../components/CertificationPage";

export default function IATF16949() {
  return (
    <CertificationPage
      title="IATF 16949:2016"
      description="IATF 16949 is the global quality management standard for the automotive industry supply chain."
      benefits={[
        "Automotive compliance",
        "Defect prevention",
        "Improved quality",
        "Process efficiency",
        "Customer satisfaction",
        "Global supplier recognition",
      ]}
      whoNeeds={[
        "Automotive Manufacturers",
        "Auto Component Suppliers",
        "OEM Vendors",
        "Engineering Companies",
      ]}
    />
  );
}