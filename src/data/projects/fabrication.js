// Images converted from D:\Website (06 Fabrication): ARCH 433 final
// portfolio. Flipbook format: cover (first page) + button opens the
// 26-page portfolio; "Open as PDF" links the rebuilt full-size PDF.
// NOTE: year / instructor not in the source — rough guess; please confirm.
const flipbook = Array.from(
  { length: 26 },
  (_, i) => `fabrication/bk-${String(i + 1).padStart(2, "0")}.jpg`
);

export default {
  id: "fabrication",
  title: "fabrication",
  type: "fabrication",
  year: 2024,
  column: 3,
  row: 2,
  term: "Spring 2024",
  location: "Iowa State University",
  course: "ARCH 433",
  instructor: "Shelby Doyle",
  team: ["Britney Brcka"],
  description:
    "A fabrication studio exploring material assemblies and digital/analog making, documented as a final portfolio.",
  format: "flipbook",
  cover: "fabrication/cover-photo.jpg",
  pdf: "fabrication/fabrication.pdf",
  flipbook,
  images: [],
};
