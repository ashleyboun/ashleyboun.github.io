// Images converted from D:\Website (03 Brand Activation Hub).
// Flipbook format: cover + button opens the 21-page research booklet;
// the photocards below are the standalone renders/storyboard.
const flipbook = Array.from(
  { length: 21 },
  (_, i) => `brand-activation-hub/bk-${String(i + 1).padStart(2, "0")}.jpg`
);

export default {
  id: "brand-activation-hub",
  title: "brand activation hub",
  type: "parasitic",
  year: 2024,
  column: 3,
  row: 1,
  term: "Spring 2024",
  location: "Iowa State University",
  course: "ARCH 402",
  instructor: "Bosuk Hur",
  team: ["Angelina German", "Stephanie Le"],
  description:
    "A parasitic intervention in San Francisco's Financial District: a flexible, inflatable shell that hosts brand pop-ups to draw foot traffic back into vacant office towers.",
  format: "flipbook",
  cover: "brand-activation-hub/cover.jpg",
  pdf: "brand-activation-hub/brand-activation-hub.pdf",
  flipbook,
  images: [
    { src: "brand-activation-hub/01.jpg", caption: "manifesto" },
    { src: "brand-activation-hub/02.jpg", caption: "skyline render" },
    { src: "brand-activation-hub/03.jpg", caption: "approach & interior renders" },
    { src: "brand-activation-hub/04.jpg", caption: "section" },
    { src: "brand-activation-hub/05.jpg", caption: "storyboard" },
  ],
};
