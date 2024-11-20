import { Publication, PublicationType } from "../script/Publication.js";
import { Divulgation } from "../script/Divulgation.js";

export default function test() {
    // Create a PublicationType instance to associate with a Publication
    const type = new PublicationType({ id: 2, name: 'Book' });
    type.commit();

    // Create Divulgation instances to associate with the Publication
    const divulgation1 = new Divulgation({
        id: 1,
        guests: [
            { id: 1, name: 'Alice', email: 'alice@example.com' },
            { id: 2, name: 'Bob', email: 'bob@example.com' },
        ]
    });

    const divulgation2 = new Divulgation({
        id: 2,
        guests: [
            { id: 3, name: 'Charlie', email: 'charlie@example.com' }
        ]
    });

    // Create a Publication instance with sharedWith
    const publication = new Publication({
        id: 1,
        title: 'JavaScript Guide',
        description: 'A comprehensive guide to JavaScript.',
        type: type,
        sharedWith: [divulgation1, divulgation2]
    });

    publication.commit(); // Save to localStorage

    // Retrieve the Publication by ID
    const retrievedPublication = Publication.retrieveById(1);
    console.log(retrievedPublication);

    // Validate the retrieved data
    if (retrievedPublication) {
        console.log(`Publication ID: ${retrievedPublication.id}`);
        console.log(`Title: ${retrievedPublication.title}`);
        console.log(`Description: ${retrievedPublication.description}`);

        // Validate the type
        if (retrievedPublication.type) {
            console.log(`Type ID: ${retrievedPublication.type.id}`);
            console.log(`Type Name: ${retrievedPublication.type.name}`);
        } else {
            console.log('No type associated with this Publication.');
        }

        // Validate sharedWith
        console.log("Shared With:");
        retrievedPublication.sharedWith.forEach((divulgation, index) => {
            console.log(`Divulgation ${index + 1}:`);
            divulgation.guests.forEach((guest, guestIndex) => {
                console.log(`  Guest ${guestIndex + 1}:`);
                console.log(`    ID: ${guest.id}`);
                console.log(`    Name: ${guest.name}`);
                console.log(`    Email: ${guest.email}`);
            });
        });
    } else {
        console.log('No Publication found with that ID.');
    }
}