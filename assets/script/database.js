export const database = {
    PublicationType: [
        { id: 1, name: 'Concert' },
        { id: 2, name: 'Theater' },
        { id: 3, name: 'Festival' },
        { id: 4, name: 'Conference' },
        { id: 5, name: 'Workshop' },
        { id: 6, name: 'Exhibition' },
        { id: 7, name: 'Party' },
        { id: 8, name: 'Sports Event' },
        { id: 9, name: 'Seminar' },
        { id: 10, name: 'Meeting' },
        { id: 11, name: 'Workshop' },
        { id: 12, name: 'Presentation' },
        { id: 13, name: 'Debate' },
        { id: 14, name: 'Rock Music' },
        { id: 15, name: 'Pop Music' },
        { id: 16, name: 'Chess Tournament' }
    ],
    Guest: [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Samuel Green', email: 'samuel.green@example.com' },
        { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com' },
        { id: 5, name: 'Michael Brown', email: 'michael.brown@example.com' },
        { id: 6, name: 'Sara White', email: 'sara.white@example.com' },
        { id: 7, name: 'David Black', email: 'david.black@example.com' },
        { id: 8, name: 'Anna Blue', email: 'anna.blue@example.com' },
        { id: 9, name: 'James King', email: 'james.king@example.com' },
        { id: 10, name: 'Sophia Lee', email: 'sophia.lee@example.com' }
    ],
    Classification: [
        { id: 1, note: 5 },
        { id: 2, note: 4 },
        { id: 3, note: 3 },
        { id: 4, note: 7 },
        { id: 5, note: 6 }
    ],
    Author: []
};

database.Author = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        classifications: [database.Classification[0]]
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        classifications: [database.Classification[1], database.Classification[2]]
    },
    {
        id: 3,
        name: 'Samuel Green',
        email: 'samuel.green@example.com',
        classifications: [database.Classification[3]]
    },
    {
        id: 4,
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        classifications: [database.Classification[4]]
    }
]
database.Publication = [
    {
        id: 1,
        title: 'Rock Concert 2024',
        description: 'An exciting rock concert.',
        type: database.PublicationType[14],  // Rock Music
        author: database.Author[0], // John Doe
        sharedWith: [database.Guest[0], database.Guest[1]]
    },
    {
        id: 2,
        title: 'Pop Music Party',
        description: 'A thrilling pop music event.',
        type: database.PublicationType[15],  // Pop Music
        author: database.Author[1], // Jane Smith
        sharedWith: [database.Guest[2], database.Guest[3]]
    },
    {
        id: 3,
        title: 'Chess Tournament Finals',
        description: 'The final stage of the chess championship.',
        type: database.PublicationType[16],  // Chess Tournament
        author: database.Author[2], // Samuel Green
        sharedWith: [database.Guest[4], database.Guest[5]]
    },
    {
        id: 4,
        title: 'Theater Show: Hamlet',
        description: 'A captivating theater performance.',
        type: database.PublicationType[2],  // Theater
        author: database.Author[3], // Emily Davis
        sharedWith: [database.Guest[6], database.Guest[7]]
    },
    {
        id: 5,
        title: 'Art Exhibition 2024',
        description: 'A showcase of the finest contemporary art.',
        type: database.PublicationType[6],  // Exhibition
        author: database.Author[0], // John Doe
        sharedWith: [database.Guest[8], database.Guest[9]]
    },
    {
        id: 6,
        title: 'Science Conference',
        description: 'A conference for science enthusiasts.',
        type: database.PublicationType[4],  // Conference
        author: database.Author[1], // Jane Smith
        sharedWith: [database.Guest[10], database.Guest[11]]
    },
    {
        id: 7,
        title: 'Music Festival 2024',
        description: 'A weekend festival with great bands.',
        type: database.PublicationType[3],  // Festival
        author: database.Author[2], // Samuel Green
        sharedWith: [database.Guest[0], database.Guest[2]]
    },
    {
        id: 8,
        title: 'Workshop on AI',
        description: 'A workshop about artificial intelligence.',
        type: database.PublicationType[5],  // Workshop
        author: database.Author[3], // Emily Davis
        sharedWith: [database.Guest[3], database.Guest[6]]
    },
    {
        id: 9,
        title: 'Startup Seminar',
        description: 'Seminar on the latest startup trends.',
        type: database.PublicationType[9],  // Seminar
        author: database.Author[0], // John Doe
        sharedWith: [database.Guest[7], database.Guest[8]]
    },
    {
        id: 10,
        title: 'Debate Night: Politics',
        description: 'A debate on current political affairs.',
        type: database.PublicationType[13],  // Debate
        author: database.Author[1], // Jane Smith
        sharedWith: [database.Guest[9], database.Guest[10]]
    },
    {
        id: 11,
        title: 'Sports Event: Soccer Finals',
        description: 'The thrilling soccer finals.',
        type: database.PublicationType[8],  // Sports Event
        author: database.Author[2], // Samuel Green
        sharedWith: [database.Guest[4], database.Guest[11]]
    },
    {
        id: 12,
        title: 'Music Presentation: Classical',
        description: 'A classical music performance.',
        type: database.PublicationType[12],  // Presentation
        author: database.Author[3], // Emily Davis
        sharedWith: [database.Guest[1], database.Guest[5]]
    }
];