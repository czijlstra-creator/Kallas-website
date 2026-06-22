import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import kallaLogoPath from "@assets/kallas-logo-clean_(4)_(1)_1779887979267.png";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0E1B4D" }} className="border-t border-white/10 py-16 mt-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-4 mb-6">
              <img
                src={kallaLogoPath}
                alt="Kallas Ventures"
                className="h-10 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium text-white leading-tight">Kallas</span>
                <span className="font-serif text-lg font-medium text-white leading-tight">Ventures</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed mt-2">
              Investing in the power of European currents. We partner with founders building a stronger, more independent Europe.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Firm</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/team" className="text-sm text-white/60 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-white/60 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Contact</h4>
            <address className="not-italic text-sm text-white/60 space-y-1">
              <p>Euclideslaan 55</p>
              <p>3584 BM Utrecht</p>
              <p>The Netherlands</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Kallas Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <a
              href="https://www.linkedin.com/company/kallas-ventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Kallas Ventures on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
