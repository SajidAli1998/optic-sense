export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
    },
    {
      name: "description",
      title: "Service Description",
      type: "text",
    },
    {
      name: "image",
      title: "Main Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Order for displaying services",
    },
  ],
};
