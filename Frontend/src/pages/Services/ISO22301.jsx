import CertificationPage from "../../components/CertificationPage";

export default function ISO22301() {
  return (
    <CertificationPage
      currentService="ISO 22301:2019"
      title="ISO 22301:2019"
      description="ISO 22301:2019 is an internationally recognized standard for Business Continuity Management Systems (BCMS). It provides a structured framework for organizations to prepare for, respond to, and recover from disruptions such as natural disasters, cyberattacks, system failures, pandemics, or other unexpected events.  The standard focuses on business impact analysis (BIA), risk assessment, continuity planning, disaster recovery, crisis management, and continual improvement, ensuring that critical operations continue with minimal interruption. "

      benefits={[
       "Business Continuity Assurance",
       "Risk Identification & Impact Analysis",
       "Preparedness for Emergencies",
       "Protection of Reputation & Customer Trust",
       "Legal & Regulatory Compliance",
       "Reduced Financial Losses",
       "Improved Organizational Resilience",
       "Continual Improvement & Testing"
      ]}

      whoNeeds={[
       "IT & Software Companies",
       "BFSI Sector (Banking, Financial Services, Insurance)",
       "Healthcare Organizations",
       "Manufacturing Industries",
       "Logistics & Supply Chain Companies",
       "Government & Public Sector",
       "Consultancy & Service Providers"
      ]}
    />
  );
}
    