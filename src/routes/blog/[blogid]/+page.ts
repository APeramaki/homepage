import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { db, type article } from "$lib/db";

export const load: PageLoad = async ({ params }) => {
   try {
      const article = await db.select(`articles:${params.blogid}`);
      if (!article.length) {
         throw error(404, 'Not found');
      }
      return {
         title: article[0].title as string,
         published: article[0].published as string,
         article: article[0].article as string,
      }   
   } catch (err) {
      throw error(500, "we f'd up....")
   }
   
};
