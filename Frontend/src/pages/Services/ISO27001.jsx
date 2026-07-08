import CertificationPage from "../../components/CertificationPage";

export default function ISO27001() {
  return (
    <CertificationPage
      currentService="ISO 27001:2022"
      title="ISO 27001:2022"
      description="ISO 27001:2022 is an internationally recognized standard for Information Security Management Systems (ISMS). It provides a systematic framework for protecting sensitive information, ensuring confidentiality, integrity, and availability of data. The standard adopts a risk-based approach to identify information security threats and implement appropriate controls. It covers areas such as data protection, access control, cybersecurity, incident management, and business continuity, helping organizations safeguard their information assets. "
      benefits={[
        "Enhanced Information Security",
        "Risk Management Approach",
        "Legal & Regulatory Compliance",
        "Increased Customer Trust & Confidence",
        "Business Continuity & Resilience",
        "Competitive Advantage",
        "Structured Processes & Controls",
        "Continual Improvement Culture"
      ]}
      whoNeeds={[
        "IT & Software Development Companies",
        "BFSI Sector (Banking, Financial Services, Insurance)",
        "Healthcare Organizations",
        "Consultancy & Professional Firms",
        "E-commerce & Online Platforms",
        "Government & Public Sector"
      ]}
    />
  );
}