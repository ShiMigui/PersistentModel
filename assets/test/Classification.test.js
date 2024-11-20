import { Classification } from "../script/Author.js";

export default function test() {

   const classification1 = new Classification({ id: 1, note: 10 });
   classification1.commit();  // Save to localStorage

   // Retrieve the object by ID and log it
   const retrievedClassification = Classification.retrieveById(1);
   console.log(retrievedClassification);  // Should log an instance of Classification with id 1 and note 10

   // Example to check the data retrieved
   if (retrievedClassification) {
      console.log(`ID: ${retrievedClassification.id}, Note: ${retrievedClassification.note}`);
   } else {
      console.log('No data found');
   }
}