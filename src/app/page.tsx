
import { HydrateClient } from "@/trpc/server";
import Hero from "./_components/Hero";
import ProjectShowcase from "./_components/ProjectShowcase";
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gutter Installation Experts",
  "description": "We specialize in professional gutter installation services to protect your home from water damage.",
  "url": "https://yourbusinesswebsite.com", // Replace with your actual website URL
  "telephone": "+1234567890", // Replace with your business phone number
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street", // Replace with your business address
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "openingHours": "Mo-Fr 08:00-17:00", // Replace with actual working hours
  "image": "https://yourbusinesswebsite.com/images/your-logo.jpg" // Replace with your logo or representative image
};

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex-grow">
        <Hero />
        <ProjectShowcase />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </main>
    </HydrateClient>
  );
}

