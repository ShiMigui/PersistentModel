import { Guest } from "../script/Divulgation.js";

export default function testGuest() {
   // Create a Guest instance
   const guest = new Guest({ id: 1, name: "John Doe", email: "john.doe@example.com" });
   guest.commit(); // Save to localStorage

   // Retrieve the Guest by ID
   const retrievedGuest = Guest.retrieveById(1);

   console.log("Guest Test:");
   if (retrievedGuest) {
      console.log(`ID: ${retrievedGuest.id}`);
      console.log(`Name: ${retrievedGuest.name}`);
      console.log(`Email: ${retrievedGuest.email}`);
   } else {
      console.log("No Guest found with ID 1.");
   }
}