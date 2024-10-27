import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Chen",
    role: "Strategy Director",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emma Williams",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're a team of experienced consultants passionate about helping businesses succeed. With decades of combined experience, we bring expertise and innovation to every project.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <Card key={person.name}>
              <CardHeader>
                <Image
                  className="aspect-[3/3] w-full rounded-2xl object-cover"
                  src={person.image}
                  alt={person.name}
                  width={300}
                  height={300}
                />
                <CardTitle className="mt-6 text-lg font-semibold leading-8">
                  {person.name}
                </CardTitle>
                <CardDescription>{person.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold leading-8">Our Mission</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                To empower businesses with strategic insights and practical solutions that drive sustainable growth and success.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-8">Our Vision</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                To be the trusted partner for businesses seeking transformative growth and operational excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-8">Our Values</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Excellence, integrity, innovation, and collaboration guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}