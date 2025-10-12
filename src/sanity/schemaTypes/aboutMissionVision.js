export default {
  name: "aboutMissionVision",
  title: "About Mission and Vision",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Main title for the section (e.g., 'At OpticSense WLL')",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "commitment",
      title: "Commitment Statement",
      type: "string",
      description:
        "Commitment statement (e.g., 'We Are Committed To Delivering Reliable And Long-Term Growth.')",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mission",
      title: "Mission",
      type: "text",
      description: "Description of the mission",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "vision",
      title: "Vision",
      type: "text",
      description: "Description of the vision",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Mission Vision Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image representing the mission and vision",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "commitment",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || "About Mission and Vision",
        subtitle: subtitle || "No commitment statement set",
        media,
      };
    },
  },
};
