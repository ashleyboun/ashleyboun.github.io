// One project per file. Add a new project by copying this file,
// renaming it, and dropping the cover/images into /public.
// `id` becomes the URL slug: /#/project/<id>
// `type` is the tag the home page filters by.
// `images` entries are { src, caption }; caption shows bottom-left on
// the image (falls back to IMG.NN if left empty). A plain "file.png"
// string still works too. ← replace the placeholder captions below.
export default {
  id: "detranscend",
  title: "detranscend",
  type: "housing",
  year: 2024,
  term: "fall 2024",
  location: "iowa state university",
  course: "arch 000",
  instructor: "cameron",
  team: ["Steven", "Nathan", "Kalen"],
  description:
    "A speculative housing study exploring how shared thresholds and stacked communal volumes can dissolve the hard line between private dwelling and collective ground.",
  cover: "project-1.png",
  images: [
    { src: "project-1.png", caption: "exterior approach" },
    { src: "project-2.png", caption: "shared threshold" },
    { src: "project-3.png", caption: "stacked communal court" },
    { src: "project-4.png", caption: "sectional study model" },
  ],
};
