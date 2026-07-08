import CertificationPage from "../../components/CertificationPage";

export default function ISO13485() {
  return (
    <CertificationPage
      currentService="ISO 13485:2016"
      title="ISO 13485:2016"
      description="ISO 13485:2016 is an internationally recognized standard for Quality Management Systems specific to the medical device industry. It provides a structured framework for organizations to consistently design, develop, produce, install, and service medical devices that meet regulatory and customer requirements. The standard emphasizes risk management, regulatory compliance, product safety, traceability, validation, and sterile/clean process controls, ensuring that medical devices are safe and effective for their intended use. "
      benefits={[
       "Regulatory Compliance",
       "Product Safety & Quality",
       "Risk-Based Approach",
       "Improved Process Control & Traceability",
       "Increased Market Opportunities",
       "Reduced Errors & Non-Conformities",
       "Strong Documentation & Validation",
       "Continual Improvement & Customer Satisfaction"
      ]}
      whoNeeds={[
       "Medical Device Manufacturers",
       "Component & Raw Material Suppliers",
       "Medical Device Distributors & Traders",
       "Service & Maintenance Providers",
       "Sterilization & Packaging Providers",
       "Startups in MedTech"
      ]}
    />
  );
}