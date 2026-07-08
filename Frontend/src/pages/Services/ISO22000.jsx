import CertificationPage from "../../components/CertificationPage";

export default function ISO22000() {
  return (
    <CertificationPage
      currentService="ISO 22000:2018"
      title="ISO 22000:2018 / HACCP"
      description="ISO 22000:2018 is an internationally recognized standard for Food Safety Management Systems (FSMS). It provides a structured framework to identify, control, and prevent food safety hazards across the entire food chain—from production to consumption. The standard integrates HACCP (Hazard Analysis and Critical Control Points) principles with a risk-based approach, focusing on food safety hazards, prerequisite programs (PRPs), operational controls, traceability, and continual improvement. It ensures that food products are safe for consumption at every stage. "
      benefits={[
       "Enhanced Food Safety",
       "HACCP-Based Risk Management",
       "Legal & Regulatory Compliance",
       "Improved Customer Confidence",
       "Better Process Control & Traceability",
       "Operational Efficiency",
       "Competitive Advantage",
       "Continual Improvement Culture"
      ]}
      whoNeeds={[
        "Food Manufacturers & Processors",
        "Food Packaging Companies",
        "Storage & Warehousing Providers",
        "Transport & Logistics Providers",
        "Hotels, Restaurants & Catering Services",
        "Retailers & Supermarkets",
        "Suppliers of Ingredients & Additives"
      ]}
    />
  );
}