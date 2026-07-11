import { Link } from "react-router-dom";
import { AtSign, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS } from "../../constants/navigation";
import { SITE_NAME, SITE_ADDRESS, CONTACT_INFO } from "../../constants/siteInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Navigasi</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                {SITE_ADDRESS}
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <AtSign className="h-4 w-4 shrink-0 text-white/50" />
                {CONTACT_INFO.instagram}
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-white/50" />
                {CONTACT_INFO.email}
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-2 text-lg font-bold">{SITE_NAME}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Jelajahi warisan budaya megalitik, fosil purba, dan keindahan
                alam di kawasan Perbukitan Kendeng.
              </p>
            </div>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-xs text-white/50">
                &copy; {currentYear} {SITE_NAME}.
              </p>
              <p className="text-xs text-white/50">
                Seluruh hak cipta dilindungi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
