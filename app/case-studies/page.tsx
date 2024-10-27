import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const caseStudies = [
  {
    title: "Global Tech Company Transformation",
    description: "How we helped a leading tech company restructure their operations and increase efficiency by 40%",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    metrics: [
      { label: "Efficiency Increase", value: "40%" },
      { label: "Cost Reduction", value: "$2.5M" },
      { label: "Implementation Time", value: "6 months" },
    ],
  },
  {
    title: "Retail Chain Digital Evolution",
    description: "Transforming a traditional retail chain into a modern omnichannel business",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    metrics: [
      { label: "Online Sales Growth", value: "125%" },
      { label: "Customer Satisfaction", value: "94%" },
      { label: "Market Expansion", value: "3 regions" },
    ],
  },
  {
    title: "Healthcare Provider Optimization",
    description: "Streamlining operations and improving patient care through process optimization",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    metrics: [
      { label: "Patient Satisfaction", value: "92%" },
      { label: "Wait Time Reduction", value: "65%" },
      { label: "Cost Savings", value: "$1.8M" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover how we've helped organizations across industries achieve their business objectives through strategic consulting.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.title} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="aspect-[16/9] w-full rounded-t-xl object-cover"
                  width={800}
                  height={450}
                />
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <CardTitle className="text-xl font-semibold">{study.title}</CardTitle>
                <CardDescription className="mt-4">{study.description}</CardDescription>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-semibold tracking-tight">{metric.value}</p>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-6" variant="outline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}