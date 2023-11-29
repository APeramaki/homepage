import { getHighlighter, type Lang } from 'shiki';
import { BUNDLED_LANGUAGES } from 'shiki';
export type Language = Lang;
const shiki = await getHighlighter({
   themes: ['rose-pine'],
   langs: ['javascript']
})
let theme = 'rose-pine';
export const LANGS = BUNDLED_LANGUAGES;

// TODO!
// theme loader and changer

export const codeToHtml = (text : string, lang: string | Lang | undefined) => {
   
   if (!shiki.getLoadedLanguages().includes(lang as Lang)){
      checkAndLoadLang(lang);
      lang = 'javascript';
   }
   
   return shiki.codeToHtml(text, {lang});
}

export const codeToThemedTokens = (text : string, lang: string | Lang | undefined) => {
   if (!shiki.getLoadedLanguages().includes(lang as Lang)){
      checkAndLoadLang(lang);
      lang = 'javascript';
   }
   return shiki.codeToThemedTokens(text, lang, theme, {includeExplanation: false});
}

// From Shiki Docs
export async function checkAndLoadLang(lang: String | Lang | undefined) {
   if (!shiki.getLoadedLanguages().includes(lang as Lang)) {
      // Check if the language is supported by Shiki
      const bundles = BUNDLED_LANGUAGES.filter((bundle) => {
         // Languages are specified by their id, they can also have aliases (i. e. "js" and "javascript")
         return bundle.id === lang || bundle.aliases?.includes(lang as Lang);
      });
      if (bundles.length > 0) {
         await shiki.loadLanguage(lang as Lang)
      } else {
         await shiki.loadLanguage('js')
         // Do some error handling or default to another language or...
      }
   }
}

export const themeFgColor = () => {
   return shiki.getForegroundColor(theme).slice(0, 7);
}

export const themeBgColor = () => {
   return shiki.getBackgroundColor(theme);
}