// Images converted from D:\Website (04 Independent Study).
// Flipbook format: cover + button opens the 25-page visual research
// journal; the photocards below are the individual study images.
const flipbook = Array.from(
  { length: 25 },
  (_, i) => `surveilled-society/bk-${String(i + 1).padStart(2, "0")}.jpg`
);

export default {
  id: "surveilled-society",
  title: "surveilled society",
  type: "research",
  year: 2024,
  column: 1,
  row: 2,
  term: "Summer 2024",
  location: "Iowa State University",
  course: "DSN 490B",
  instructor: "Deborah Hauptmann",
  team: [],
  description:
    "An independent study examining the invasive nature of surveillance systems and their subconscious effects, encapsulated in a research journal of writing and abstract visualizations.",
  format: "flipbook",
  cover: "surveilled-society/cover.jpg",
  pdf: "surveilled-society/surveilled-society.pdf",
  flipbook,
  images: [
    { src: "surveilled-society/01.jpg", caption: "congested space" },
    { src: "surveilled-society/02.jpg", caption: "disrupting camera activity" },
    { src: "surveilled-society/03.jpg", caption: "facial recognition" },
    { src: "surveilled-society/04.jpg", caption: "hyperspace" },
    { src: "surveilled-society/05.jpg", caption: "sovereignty" },
    { src: "surveilled-society/06.jpg", caption: "tracking" },
    { src: "surveilled-society/07.jpg", caption: "unwarranted collection of data" },
    { src: "surveilled-society/08.jpg", caption: "unwarranted collection of data (b&w)" },
  ],
};
