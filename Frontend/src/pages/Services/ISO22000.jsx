import CertificationPage from "../../components/CertificationPage";

export default function ISO22000() {
  return (
    <CertificationPage
      title="ISO 22000:2018 / HACCP"
      description="ISO 22000 is a Food Safety Management System standard designed to identify and control food safety hazards."
      benefits={[
        "Food safety assurance",
        "HACCP implementation",
        "Regulatory compliance",
        "Consumer confidence",
        "International market access",
        "Reduced food risks",
      ]}
      whoNeeds={[
        "Food Manufacturers",
        "Restaurants",
        "Food Packaging Companies",
        "Catering Services",
        "Exporters",
      ]}
    />
  );
}