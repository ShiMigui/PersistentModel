import { PublicationType } from "../script/Publication.js";

export default function test() {
    // Create a PublicationType instance
    const publicationType = new PublicationType({ id: 1, name: 'Research Article' });
    publicationType.commit(); // Save to localStorage

    // Retrieve the PublicationType by ID
    const retrievedPublicationType = PublicationType.retrieveById(1);
    console.log(retrievedPublicationType); // Should log the PublicationType instance

    // Validate the retrieved data
    if (retrievedPublicationType) {
        console.log(`PublicationType ID: ${retrievedPublicationType.id}`);
        console.log(`PublicationType Name: ${retrievedPublicationType.name}`);
    } else {
        console.log('No PublicationType found with that ID.');
    }
}