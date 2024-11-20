import { Divulgation, Guest } from "../script/Divulgation.js";

export default function testDivulgation() {
   // Create Guest instances
   const guest1 = new Guest({ id: 1, name: "Alice", email: "alice@example.com" });
   const guest2 = new Guest({ id: 2, name: "Bob", email: "bob@example.com" });

   // Create a Divulgation instance with the guests
   const divulgation = new Divulgation({
      id: 1,
      guests: [
         { id: 1, name: "Alice", email: "alice@example.com" },
         { id: 2, name: "Bob", email: "bob@example.com" },
      ],
   });

   divulgation.commit(); // Save to localStorage

   // Retrieve the Divulgation by ID
   const retrievedDivulgation = Divulgation.retrieveById(1);

   console.log("Divulgation Test:");
   if (retrievedDivulgation) {
      console.log(`Divulgation ID: ${retrievedDivulgation.id}`);
      console.log("Guests:");
      retrievedDivulgation.guests.forEach((guest, index) => {
         console.log(`Guest ${index + 1}:`);
         console.log(`  ID: ${guest.id}`);
         console.log(`  Name: ${guest.name}`);
         console.log(`  Email: ${guest.email}`);
      });
   } else {
      console.log("No Divulgation found with ID 1.");
   }
}