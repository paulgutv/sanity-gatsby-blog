export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "631eb114bb7dd7334a026309",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-1rnp4i2u",
                  apiId: "7f95f039-2779-4d88-8e8e-a2257a762d14",
                },
                {
                  buildHookId: "631eb11595a36538644f669f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2chkk4c6",
                  apiId: "471f30b1-ced4-4ee1-a666-2b189afb82de",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/paulgutv/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2chkk4c6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
