import CertificationPage from "../../components/CertificationPage";

export default function ISO9001() {
  return (
    <CertificationPage
      currentService="ISO 9001:2015"
      title="ISO 9001:2015"
      description="ISO 9001:2015 is the world’s most widely adopted Quality Management System (QMS) standard. It provides a systematic approach for organizations to ensure consistent quality in products and services, enhance customer satisfaction, and drive continual improvement. The standard is based on key principles such as customer focus, leadership, process approach, risk-based thinking, and continual improvement. It helps organizations streamline operations, reduce errors, and build a strong foundation for sustainable growth."

      benefits={[
       "Improved Customer Satisfaction",
       "Standardized & Efficient Processes",
       "Risk-Based Thinking & Better Decision Making",
       "Enhanced Product & Service Quality",
       "Increased Business Opportunities",
       "Continual Improvement Culture",
       "Strong Supplier & Stakeholder Relationships",
       "Compliance with Legal & Regulatory Requirements"
      ]}

      whoNeeds={[
       "Manufacturing Companies",
       "Service Organizations",
       "Trading & Distribution Firms",
       "Startups & SMEs",
       "Large Enterprises",
       "Government & Public Sector Organizations"
      ]}
    />
  );
}