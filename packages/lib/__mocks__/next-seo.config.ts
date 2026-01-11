vi.mock("@calcom/lib/next-seo.config", () => ({
  default: {
    headSeo: {
      siteName: "Bizcal",
    },
    defaultNextSeo: {
      title: "Bizcal",
      description: "Scheduling infrastructure for everyone.",
    },
  },
  seoConfig: {
    headSeo: {
      siteName: "Bizcal",
    },
  },
  buildSeoMeta: vi.fn().mockReturnValue({}),
}));
