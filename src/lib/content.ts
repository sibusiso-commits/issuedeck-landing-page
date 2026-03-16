export const siteConfig = {
  name: "pandoralabs",
  title:
    "Issue cards and process payments directly from South African infrastructure.",
  description:
    "We help businesses build modern card programs, manage spending controls, and process transactions without relying on legacy banking systems."
};

export const stats = [
  {
    title: "Always on",
    body:
      "Pandoralabs is designed for reliable card issuing and payments operations across South Africa."
  },
  {
    title: "Fast integration",
    body:
      "A single API helps teams launch modern card issuing programs and move from sandbox to production faster."
  },
  {
    title: "Built-in controls",
    body:
      "Real-time authorization controls and merchant restrictions are enforced at the network level."
  }
];

export const productSections = [
  {
    id: "issuing",
    eyebrow: "Card issuing",
    title: "Virtual and physical cards, issued in milliseconds",
    variant: "card",
    columns: [
      {
        title: "Instant virtual cards",
        body:
          "Issue cards programmatically. Tokenize for Samsung Pay and Google Pay. Set per-transaction limits."
      },
      {
        title: "Physical fulfillment",
        body:
          "Your branding, your design. Manufactured and shipped from local fulfillment partners."
      }
    ]
  },
  {
    id: "controls",
    eyebrow: "Spending controls",
    title: "Granular controls for every transaction",
    variant: "code",
    columns: [
      {
        title: "Merchant restrictions",
        body:
          "Control where cards can be used with merchant category codes and geographic limits."
      },
      {
        title: "Velocity controls",
        body:
          "Set per-transaction, daily, and monthly spending limits. Enforced at authorization."
      }
    ]
  },
  {
    id: "events",
    eyebrow: "Real-time events",
    title: "Every state change, delivered in milliseconds",
    variant: "events",
    body:
      "Authorizations, settlements, declines, and card status updates delivered to your endpoint with automatic retries and exponential backoff.",
    bodyTwo:
      "Filter by event type. Verify signatures. Replay events from the dashboard."
  }
];

export const compliance = [
  {
    title: "Encryption & Testing",
    body:
      "All communication is encrypted end-to-end. Sensitive data is stored using industry-standard encryption. Formal security audits are conducted bi-annually."
  },
  {
    title: "Compliance",
    body:
      "PCI-DSS Level 1 certified. POPIA compliant. SARB reporting handled automatically. Your compliance burden, reduced."
  }
];

export const footerLinks = {
  company: ["About", "Contact"],
  legal: ["Terms of Service", "Privacy Policy", "PAIA Manual"]
};
