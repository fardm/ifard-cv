import type { CV } from "./cv.d.ts";

declare module "@cv" {
  const cv: CV;
  export default cv;

  export const basics: CV["basics"];
  export const info: CV["info"];
  export const work: CV["work"];
  export const volunteer: CV["volunteer"];
  export const education: CV["education"];
  export const awards: CV["awards"];
  export const certificates: CV["certificates"];
  export const publications: CV["publications"];
  export const skills: CV["skills"];
  export const languages: CV["languages"];
  export const interests: CV["interests"];
  export const references: CV["references"];
  export const projects: CV["projects"];
  export const social: CV["social"];
}
