import { Button } from "~/components/ui/button";
import { siteConfig } from "~/lib/content";

export function SiteHeader() {
  return (
    <header class="site-shell site-header">
      <a class="brand brand-wordmark" href="/">
        <span>{siteConfig.name}</span>
      </a>

      <Button href="#get-started">
        Get access
      </Button>
    </header>
  );
}
