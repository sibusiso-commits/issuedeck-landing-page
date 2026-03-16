import { Meta, Title } from "@solidjs/meta";
import { For, Show } from "solid-js";

import { SiteHeader } from "~/components/layout/site-header";
import { Button } from "~/components/ui/button";
import {
  compliance,
  footerLinks,
  productSections,
  siteConfig,
  stats
} from "~/lib/content";

export default function Home() {
  return (
    <>
      <Title>Pandoralabs</Title>
      <Meta name="description" content={siteConfig.description} />

      <main class="page">
        <SiteHeader />

        <section class="hero site-shell">
          <div class="hero-copy">
            <h1>
              Issue cards and <span class="accent">process payments</span>{" "}
              directly from South African infrastructure
            </h1>
            <p class="hero-text">{siteConfig.description}</p>

            <div class="hero-actions">
              <Button href="#get-started">Get access</Button>
              <Button href="mailto:hello@pandoralabs.co" variant="ghost">
                Contact sales
              </Button>
            </div>

            <div class="hero-proof">
              <p>Samsung Pay partner</p>
              <span class="proof-dot" />
              <p>Built for South African card issuing</p>
            </div>
          </div>
        </section>

        <section class="section site-shell why-section">
          <div class="section-heading why-copy">
            <p class="eyebrow">Why Pandoralabs</p>
            <h2>Build and scale your card programs, faster</h2>
            <p class="section-copy">
              Pandoralabs offers a single API that takes days to integrate,
              enabling any business to launch modern card issuing programs and
              process transactions across South Africa.
            </p>
          </div>

          <div class="stats-grid">
            <For each={stats}>
              {(item) => (
                <article class="stat-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              )}
            </For>
          </div>
        </section>

        <For each={productSections}>
          {(section, index) => (
            <section
              class={`section site-shell feature-section ${
                index() % 2 === 1 ? "feature-reverse" : ""
              }`}
              id={section.id}
            >
              <div class="feature-visual">
                <Show when={section.variant === "card"}>
                  <div class="mock-card">
                    <div class="mock-card-chip" />
                    <div class="mock-card-lines">
                      <span />
                      <span />
                    </div>
                    <div class="mock-card-number">
                      <span>....</span>
                      <span>....</span>
                      <span>....</span>
                      <span>4242</span>
                    </div>
                    <div class="mock-card-meta">
                      <div>
                        <small>Cardholder</small>
                        <strong>Jane Doe</strong>
                      </div>
                      <div>
                        <small>Expires</small>
                        <strong>03/28</strong>
                      </div>
                    </div>
                  </div>
                </Show>

                <Show when={section.variant === "code"}>
                  <div class="code-window">
                    <div class="code-title">create-card.ts</div>
                    <pre>{`import { Pandora } from "@pandoralabs/sdk";

const client = new Pandora({
  apiKey: process.env.PANDORA_API_KEY
});

const card = await client.cards.create({
  type: "virtual",
  currency: "ZAR",
  spending_limit: 50000,
  merchant_categories: ["retail", "travel"]
});`}</pre>
                  </div>
                </Show>

                <Show when={section.variant === "events"}>
                  <div class="events-panel">
                    <div class="events-head">
                      <span>Webhook events</span>
                      <span>Last 24h</span>
                    </div>
                    <div class="event-row">
                      <span>card.created</span>
                      <span>2ms</span>
                      <span class="event-pill">delivered</span>
                    </div>
                    <div class="event-row">
                      <span>transaction.authorized</span>
                      <span>8ms</span>
                      <span class="event-pill">delivered</span>
                    </div>
                    <div class="event-row">
                      <span>transaction.settled</span>
                      <span>12ms</span>
                      <span class="event-pill">delivered</span>
                    </div>
                    <div class="event-row">
                      <span>card.frozen</span>
                      <span>3ms</span>
                      <span class="event-pill">delivered</span>
                    </div>
                  </div>
                </Show>
              </div>

              <div class="feature-copy">
                <p class="eyebrow">{section.eyebrow}</p>
                <h2>{section.title}</h2>

                <Show when={section.columns}>
                  <div class="feature-columns">
                    <For each={section.columns}>
                      {(column) => (
                        <article class="feature-column">
                          <h3>{column.title}</h3>
                          <p>{column.body}</p>
                        </article>
                      )}
                    </For>
                  </div>
                </Show>

                <Show when={section.body}>
                  <div class="feature-text-block">
                    <p>{section.body}</p>
                    <p>{section.bodyTwo}</p>
                  </div>
                </Show>
              </div>
            </section>
          )}
        </For>

        <section class="section site-shell compliance-section">
          <div class="compliance-copy">
            <p class="eyebrow">Security &amp; compliance</p>
            <h2>We believe your data should stay your data</h2>

            <div class="policy-links">
              <a href="#legal">Terms of Service</a>
              <a href="#legal">Data Practices</a>
              <a href="#legal">PAIA Manual</a>
            </div>
          </div>

          <div class="compliance-grid">
            <For each={compliance}>
              {(item) => (
                <article class="compliance-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              )}
            </For>
          </div>
        </section>

        <section class="section cta-section" id="get-started">
          <div class="site-shell cta-card">
            <p class="eyebrow">Get started</p>
            <h2>Start building with Pandoralabs today</h2>
            <p class="section-copy cta-copy">
              Get instant access to our API sandbox and start issuing cards.
            </p>

            <div class="hero-actions cta-actions">
              <Button href="mailto:hello@pandoralabs.co">Get access</Button>
              <Button href="mailto:hello@pandoralabs.co" variant="secondary">
                Contact sales
              </Button>
            </div>
          </div>
        </section>

        <footer class="site-footer">
          <div class="site-shell footer-grid">
            <div class="footer-brand">
              <a class="brand brand-wordmark" href="/">
                <span>{siteConfig.name}</span>
              </a>
              <p>
                South African card issuing and payments infrastructure for modern
                businesses.
              </p>
            </div>

            <div class="footer-column">
              <p class="footer-heading">Company</p>
              <For each={footerLinks.company}>
                {(link) => <a href="#">{link}</a>}
              </For>
            </div>

            <div class="footer-column" id="legal">
              <p class="footer-heading">Legal</p>
              <For each={footerLinks.legal}>
                {(link) => <a href="#">{link}</a>}
              </For>
            </div>
          </div>

          <div class="site-shell footer-bottom">
            <span>{siteConfig.name}</span>
            <span>© 2026 Pandoralabs. All rights reserved.</span>
          </div>
        </footer>
      </main>
    </>
  );
}
