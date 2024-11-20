import { Author } from "../script/Author.js";

export default function test() {
   // Create an Author instance with classifications
   const author = new Author({
      id: 1,
      name: 'John Doe',
      classifications: [
         { id: 1, note: 10 },
         { id: 2, note: 15 }
      ]
   });

   // Commit the Author to localStorage
   author.commit();

   // Retrieve the Author by ID
   const retrievedAuthor = Author.retrieveById(1);
   console.log(retrievedAuthor);

   // Log the details of the retrieved Author and its classifications
   if (retrievedAuthor) {
      console.log(`Author: ${retrievedAuthor.name}`);
      retrievedAuthor.classifications.forEach(c => console.log(`Classification ID: ${c.id}, Note: ${c.note}`));
   } else {
      console.log('No Author found with that ID');
   }
}