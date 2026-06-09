import CertificationPage from "../../components/CertificationPage";

export default function ISO14001() {
  return (
    <CertificationPage
      title="ISO 14001:2015"
      description="ISO 14001 is the international standard for Environmental Management Systems (EMS). It helps organizations improve environmental performance and regulatory compliance."
      benefits={[
        "Reduced environmental impact",
        "Regulatory compliance",
        "Improved sustainability",
        "Enhanced company reputation",
        "Reduced waste and costs",
        "Competitive advantage",
      ]}
      whoNeeds={[
        "Manufacturing Companies",
        "Construction Firms",
        "Chemical Industries",
        "Exporters",
        "Large Corporates",
      ]}
    />
  );
}