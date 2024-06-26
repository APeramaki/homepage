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
   .set("codespan", renderers.Codespan)
   .set("list", renderers.List)
   .set("list_item", renderers.ListItem)
   .set("hr", renderers.Hr)
   .set("table", renderers.Table)
   .set("blockquote", renderers.Blockquote)
