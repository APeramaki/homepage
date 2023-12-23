import { Surreal } from 'surrealdb.js'
import { PUBLIC_DB_URL, PUBLIC_DB_NAMESPACE, PUBLIC_DB_DATABASE } from '$env/static/public'

export const db = new Surreal();

export async function connectDB () {
   try {
      await db.connect(PUBLIC_DB_URL, {

      namespace: PUBLIC_DB_NAMESPACE,
      database: PUBLIC_DB_DATABASE,
      })
      return db;
   } catch {
      return null;
   }
}

connectDB();
export interface article {
   article: string,
   published: string,
   title: string
}