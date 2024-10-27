import Link from "next/link";
import { ArrowRight, BarChart, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    name: "Strategic Planning",
    description: "Develop comprehensive business strategies tailored to your goals",
    icon: BarChart,
  },
  {
    name: "Organizational Development",
    description: "Build high-performing teams and optimize organizational structure",
    icon: Users,
  },
  {
    name: "Business Transformation",
    description: "Navigate change and implement successful transformation initiatives",
    icon: Building,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Transform Your Business with Expert Consulting
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We help businesses navigate complex challenges and achieve sustainable growth through strategic consulting services.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to scale your business
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide comprehensive consulting services to help you overcome challenges and achieve your business objectives.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} className="flex flex-col">
                <CardHeader>
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle className="mt-4">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}