export default {
  name: "aboutUs",
  title: "About Us",
  type: "document",
  fields: [
    {
      name: "tag",
      title: "Tag",
      type: "string",
      description: "The small tag text (e.g., 'About Us')",
    },
    {
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main heading (e.g., 'Who We Are')",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Main description text for the about us section",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
