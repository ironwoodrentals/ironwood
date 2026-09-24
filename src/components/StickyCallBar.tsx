import Icon from "./Icon";
import { company } from "@/lib/site";

/**
 * Sticky bottom bar on phones: tap-to-call + quote shortcut.
 * Mobile-only (sm:hidden) so it never competes with the desktop header.
 */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden">
      <div
        className="grid grid-cols-2 border-t border-white/10 bg-forest-dark/95 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] backdrop-blur"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={company.phoneHref}
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-widest text-white transition active:bg-white/10"
        >
          <Icon name="phone" size={18} />
          Call Now
        </a>
        <a
          href="/#contact"
          className="flex items-center justify-center gap-2 bg-gold py-4 text-sm font-bold uppercase tracking-widest text-forest-dark transition active:bg-gold-soft"
        >
          Get a Quote
          <Icon name="arrow" size={16} />
        </a>
      </div>
    </div>
  );
}
