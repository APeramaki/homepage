import * as renderers from "$lib/renderers/index";
export const rendermap = new Map()
   .set("heading", renderers.Heading)
   .set("code", renderers.Code)
   .set("em", renderers.Em)
   .set("paragraph", renderers.Paragraph)
   .set("text", renderers.Text)
   .set("strong", renderers.Strong)
   .set("image", renderers.Image)
   .set("link", renderers.Link)
   .set("del", renderers.Del)
   