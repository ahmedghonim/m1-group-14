export default async function sitemap() {
  const defaultURL = "https://www.m1group-mr.com";

  return [
    {
      url: `${defaultURL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/ar`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/ar/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/ar/blog`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/ar/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/ar/fqa`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/ar/our-services`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/ar/terms-conditions`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/en/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/en/blog`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/en/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/en/fqa`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/en/our-services`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/en/terms-conditions`,
      lastModified: new Date(),
    },
  ];
}
