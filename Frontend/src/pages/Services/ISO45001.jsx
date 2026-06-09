import CertificationPage from "../../components/CertificationPage";

export default function ISO45001() {
  return (
    <CertificationPage
      title="ISO 45001:2018"
      description="ISO 45001 helps organizations establish Occupational Health & Safety Management Systems to reduce workplace risks."
      benefits={[
        "Safer workplace",
        "Reduced accidents",
        "Legal compliance",
        "Employee confidence",
        "Improved productivity",
        "Reduced downtime",
      ]}
      whoNeeds={[
        "Factories",
        "Construction Companies",
        "Engineering Firms",
        "Logistics Companies",
        "Manufacturing Units",
      ]}
    />
  );
}