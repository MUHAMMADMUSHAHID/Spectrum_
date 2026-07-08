import CertificationPage from "../../components/CertificationPage";

export default function ISO14001() {
  return (
    <CertificationPage
      currentService="ISO 14001:2015"
      title="ISO 14001:2015"
      description="ISO 14001:2015 is an internationally recognized standard for Environmental Management Systems (EMS). It provides a structured framework for organizations to identify, control, and reduce their environmental impact while ensuring compliance with applicable legal and regulatory requirements. The standard focuses on key elements such as environmental aspects & impacts, compliance obligations, risk-based thinking, resource efficiency, pollution prevention, and continual improvement. It enables organizations to operate responsibly and contribute to environmental sustainability. "
      benefits={[
       "Environmental Compliance",
       "Reduced Environmental Impact",
       "Cost Savings through Resource Efficiency",
       "Improved Corporate Image & Reputation",
       "Risk Management & Sustainability",
       "Continual Improvement Culture",
       "Competitive Advantage & Business Growth",
       "Employee Awareness & Engagement"
      ]}
      whoNeeds={[
        "Manufacturing Industries",
        "Construction & Infrastructure Companies",
        "Logistics & Warehousing",
        "Hotels & Hospitality Sector",
        "Healthcare Facilities",
        "Service Organizations"
      ]}
    />
  );
}