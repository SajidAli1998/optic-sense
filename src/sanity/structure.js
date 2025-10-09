// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Content") // Updated title to reflect the new context
    .items([
      // No blog-related items included
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["post", "category", "author"].includes(item.getId())
      ),
    ]);
