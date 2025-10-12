export default {
  name: "statsSection",
  title: "Statistics Section",
  type: "document",
  fields: [
    {
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "number",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "label",
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
};
