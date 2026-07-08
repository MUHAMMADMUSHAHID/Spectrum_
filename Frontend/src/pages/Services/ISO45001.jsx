import CertificationPage from "../../components/CertificationPage";

export default function ISO45001() {
  return (
    <CertificationPage 
      currentService="ISO 45001:2018"
      title="ISO 45001:2018"
      description="ISO 45001:2018 is an internationally recognized standard for Occupational Health & Safety Management Systems (OH&S). It provides a structured framework for organizations to identify hazards, assess risks, and implement effective controls to prevent work-related injuries, illnesses, and incidents. The standard emphasizes risk-based thinking, hazard identification, legal compliance, worker participation, and continual improvement, ensuring a safe and healthy workplace for employees and other stakeholders."
      benefits={[
        "Improved Workplace Safety",
        "Legal & Regulatory Compliance",
        "Risk-Based Approach",
        "Employee Participation & Morale",
        "Reduced Downtime & Costs",
        "Enhanced Organizational Reputation",
        "Continual Improvement Culture",
        "Competitive Advantage"
      ]}
      whoNeeds={[
       "Manufacturing & Engineering Industries",
       "Construction & Infrastructure Companies",
       "Logistics & Warehousing",
       "Oil & Gas / Energy Sector",
       "Healthcare Organizations",
       "Service Sector & Offices"
      ]}
    />
  );
}