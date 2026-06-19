// Images converted from D:\Website (01 Lio Lab): final photos, mock model,
// and progress photos (competition phase excluded).
const pad = (n) => String(n).padStart(2, "0");

export default {
  id: "lio-labs",
  title: "lio labs",
  type: "design-build",
  year: 2024,
  column: 1,
  row: 1,
  term: "Fall 2024",
  location: "Iowa State University",
  course: "ARCH 403",
  instructor: "Peter Zuroweste",
  team: [],
  description:
    "A south–north design-build studio (ISU × UPN) that designed and built a bamboo shading structure for the play area of Fé y Alegría 34, a K-12 school in Chorrillos, Lima, Peru.",
  cover: "lio-labs/cover.jpg",
  images: Array.from({ length: 12 }, (_, i) => `lio-labs/${pad(i + 1)}.jpg`),
};
