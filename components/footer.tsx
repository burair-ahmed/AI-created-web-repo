import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-primary">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; 2024 Nexus Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}