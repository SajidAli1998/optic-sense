export default {
  name: "experienceSection",
  title: "Experience Section",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Experience Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
