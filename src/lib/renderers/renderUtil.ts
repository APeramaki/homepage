import * as renderers from "$lib/renderers/index";
export const rendermap = new Map()
   .set("heading", renderers.Heading)
   .set("code", renderers.Codespan)
   .set("em", renderers.Em)
   .set("paragraph", renderers.Paragraph)
   .set("text", renderers.Paragraph);