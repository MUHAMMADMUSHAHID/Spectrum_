import CertificationPage from "../../components/CertificationPage";

export default function ISO13485() {
  return (
    <CertificationPage
      title="ISO 13485:2016"
      description="ISO 13485 is a Quality Management System specifically developed for medical device manufacturers."
      benefits={[
        "Medical device compliance",
        "Risk management",
        "Product quality assurance",
        "Regulatory approval support",
        "Global market access",
        "Customer trust",
      ]}
      whoNeeds={[
        "Medical Device Manufacturers",
        "Healthcare Equipment Suppliers",
        "Diagnostic Equipment Companies",
        "Medical Product Exporters",
      ]}
    />
  );
}