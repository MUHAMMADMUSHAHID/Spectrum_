import CertificationPage from "../../components/CertificationPage";

export default function ISO27001() {
  return (
    <CertificationPage
      title="ISO 27001:2022"
      description="ISO 27001 provides a framework for Information Security Management Systems (ISMS) to protect sensitive information."
      benefits={[
        "Data protection",
        "Cybersecurity management",
        "Risk reduction",
        "Customer confidence",
        "Legal compliance",
        "Business continuity",
      ]}
      whoNeeds={[
        "IT Companies",
        "Software Firms",
        "Banks",
        "Healthcare Organizations",
        "BPO Companies",
      ]}
    />
  );
}