import { Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="container mx-auto px-4 text-left md:text-center">
        <p className="mb-2">
          ServerlessDays is driven by passionate volunteers. Want to get
          involved?{" "}
          <a
            href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Volunteering%20for%20ServerlessDays"
            className="text-white hover:underline"
          >
            Contact us!
          </a>
        </p>
        <p className="mb-4">
          For questions, sponsorships, or press inquiries, reach out at{" "}
          <a
            href="mailto:hello@serverlessdays.io?subject=ServerlessDays%20Inquiry"
            className="text-white hover:underline"
          >
            hello@serverlessdays.io
          </a>
          .
        </p>
        <a
          href="https://twitter.com/ServerlessDays"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white hover:underline"
        >
          <Twitter className="mr-2" /> @ServerlessDays
        </a>
      </div>
    </footer>
  );
}
