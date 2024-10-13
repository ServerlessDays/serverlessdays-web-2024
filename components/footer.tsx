import Link from "next/link";
import X from "@/components/icons/social-x.svg";
import Youtube from "@/components/icons/social-yt.svg";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="container mx-auto px-4 text-left md:text-center">
        <p className="mb-2">
          ServerlessDays is driven by passionate volunteers. Want to get
          involved?{" "}
          <Link
            href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Volunteering%20for%20ServerlessDays"
            className="text-white underline"
          >
            Contact us!
          </Link>
        </p>
        <p className="mb-4">
          For questions, sponsorships, or press inquiries, reach out at{" "}
          <Link
            href="mailto:hello@serverlessdays.io?subject=ServerlessDays%20Inquiry"
            className="text-white underline"
          >
            hello@serverlessdays.io
          </Link>
          .
        </p>

        <div className="flex flex-wrap gap-2 items-center justify-center">
          <Link
            href="https://x.com/ServerlessDays"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:underline"
          >
            <Image src={X} alt="X" width={18} height={18} className="text-white" />
          </Link>
          |
          <Link
            href="https://www.youtube.com/@serverlessdays"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:underline"
          >
            <Image src={Youtube} alt="YouTube" width={24} height={24} className="text-white" />
          </Link>
          |
          <Link
            href="https://assets.serverlessdays.io/ServerlessDays Media Kit.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white underline"
          >
            Media Kit
          </Link>
          |
          <Link
            href="/past-events"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white underline"
          >
            Past Events
          </Link>
          |
          <Link
            href="/organize"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white underline"
          >
            Organize
          </Link>
          |
          <Link
            href="/about"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white underline"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
