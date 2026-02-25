import { Separator } from "@/components/ui/separator";

const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "OpenClaw", href: "#" },
      { label: "Twitter / X", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <span className="text-lg font-bold tracking-tight">ClawCove</span>
            <p className="mt-2 text-sm text-foreground-muted">
              Your own personal AI. Always on. Always yours.
            </p>
          </div>

          <div className="flex gap-16">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold">{group.title}</h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-sm text-foreground-subtle">
          &copy; 2026 ClawCove. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
