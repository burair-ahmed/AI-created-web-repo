import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    name: "Strategic Consulting",
    description: "Comprehensive business strategy development and implementation",
    features: [
      "Market analysis and competitive positioning",
      "Growth strategy development",
      "Business model optimization",
      "Strategic planning workshops",
    ],
  },
  {
    name: "Operational Excellence",
    description: "Optimize your operations for maximum efficiency and productivity",
    features: [
      "Process optimization",
      "Quality management systems",
      "Supply chain optimization",
      "Cost reduction strategies",
    ],
  },
  {
    name: "Digital Transformation",
    description: "Navigate the digital landscape and leverage technology effectively",
    features: [
      "Digital strategy development",
      "Technology assessment and selection",
      "Implementation roadmap",
      "Change management support",
    ],
  },
];

export default function Services() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Consulting Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We offer a wide range of consulting services to help your business thrive in today's competitive landscape.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="mt-6 space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircle2 className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                        <span className="text-sm leading-6 text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}