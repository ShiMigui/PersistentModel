export const database = {
    PublicationType: {},
    Classification: {},
    Publication: {},
    Author: {},
    Guest: {},
};

database.PublicationType[1] = { name: 'Show de Rock' };
database.PublicationType[2] = { name: 'Torneio de Xadrez' };
database.PublicationType[3] = { name: 'Workshop sobre Tecnologia' };
database.PublicationType[4] = { name: 'Feira de Ciências' };

database.Classification[1] = { note: 5 };
database.Classification[2] = { note: 3 };
database.Classification[3] = { note: 4 };
database.Classification[4] = { note: 2 };
database.Classification[5] = { note: 1 };

database.Guest[1] = { name: 'João Silva', email: 'joao.silva@email.com', password: 'senha123' };

database.Guest[2] = { name: 'Maria Oliveira', email: 'maria.oliveira@email.com', password: 'maria456' };

database.Guest[3] = { name: 'Pedro Santos', email: 'pedro.santos@email.com', password: 'pedro789' };

database.Guest[4] = { name: 'Ana Souza', email: 'ana.souza@email.com', password: 'ana101' };

database.Author[1] = {
    id: 1, name: 'Carlos Souza', email: 'carlos.souza@email.com', password: 'carlos123', classifications: [database.Classification[1], database.Classification[2]]
};

database.Author[2] = {
    id: 2, name: 'Fernanda Lima', email: 'fernanda.lima@email.com', password: 'fernanda456', classifications: [database.Classification[3], database.Classification[4]]
};

database.Publication[1] = {
    id: 1,
    title: 'Show de Rock na Praia',
    description: 'Um evento incrível com bandas de rock no litoral.',
    date: '2024-12-20T19:00:00Z',
    type: database.PublicationType[1],
    author: database.Author[1],
    sharedWith: [database.Guest[1], database.Guest[3]],
};

database.Publication[2] = {
    id: 2,
    title: 'Torneio de Xadrez Internacional',
    description: 'Competição de xadrez com jogadores internacionais.',
    date: '2024-12-15T09:00:00Z',
    type: database.PublicationType[2],
    author: database.Author[1],
    sharedWith: [database.Guest[2], database.Guest[4]],
};

database.Publication[3] = {
    id: 3,
    title: 'Palestra sobre Inteligência Artificial',
    description: 'Palestra com especialistas em IA para discutir as últimas tendências.',
    date: '2025-01-10T14:00:00Z',
    type: database.PublicationType[3],
    author: database.Author[2],
    sharedWith: [database.Guest[1], database.Guest[4]],
};

database.Publication[4] = {
    id: 4,
    title: 'Feira de Ciências da Escola XYZ',
    description: 'Evento educacional onde estudantes apresentam projetos de ciências.',
    date: '2024-11-30T08:00:00Z',
    type: database.PublicationType[4],
    author: database.Author[2],
    sharedWith: [database.Guest[3]],
};


database.Publication[5] = {
    id: 5,
    title: 'Encontro de Programadores',
    description: 'Reunião de profissionais de TI para compartilhar conhecimentos sobre programação.',
    date: '2025-02-05T10:00:00Z',
    type: database.PublicationType[3],
    author: database.Author[1],
    sharedWith: [database.Guest[1], database.Guest[2]],
};

database.Publication[6] = {
    id: 6,
    title: 'Festival de Música Brasileira',
    description: 'Evento cultural com artistas locais apresentando a música brasileira.',
    date: '2025-03-01T18:00:00Z',
    type: database.PublicationType[1],
    author: database.Author[2],
    sharedWith: [database.Guest[2], database.Guest[4]],
};

database.Publication[7] = {
    id: 7,
    title: 'Workshop de Fotografia Digital',
    description: 'Oficina prática sobre as técnicas mais avançadas de fotografia digital.',
    date: '2025-04-10T13:00:00Z',
    type: database.PublicationType[3],
    author: database.Author[2],
    sharedWith: [database.Guest[1], database.Guest[3]],
};

database.Publication[8] = {
    id: 8,
    title: 'Competição de Robótica',
    description: 'Torneio de robôs autônomos com participantes de várias escolas técnicas.',
    date: '2025-05-18T09:00:00Z',
    type: database.PublicationType[4],
    author: database.Author[1],
    sharedWith: [database.Guest[4]],
};

database.Publication[9] = {
    id: 9,
    title: 'Seminário sobre Sustentabilidade Ambiental',
    description: 'Seminário com especialistas sobre os desafios da sustentabilidade e conservação ambiental.',
    date: '2025-06-10T16:00:00Z',
    type: database.PublicationType[3],
    author: database.Author[2],
    sharedWith: [database.Guest[3], database.Guest[2]],
};

database.Publication[10] = {
    id: 10,
    title: 'Exposição de Arte Contemporânea',
    description: 'Exposição de artistas emergentes com foco em arte contemporânea.',
    date: '2025-07-05T14:00:00Z',
    type: database.PublicationType[4],
    author: database.Author[1],
    sharedWith: [database.Guest[1], database.Guest[2]],
};

database.Publication[11] = {
    id: 11,
    title: 'Caminhada Científica pela Floresta Amazônica',
    description: 'Exposição sobre a biodiversidade da Amazônia com trilhas guiadas por especialistas.',
    date: '2025-08-12T08:00:00Z',
    type: database.PublicationType[4],
    author: database.Author[2],
    sharedWith: [database.Guest[4]],
};

database.Publication[12] = {
    id: 12,
    title: 'Conferência de Tecnologias Emergentes',
    description: 'Discussão sobre as novas tecnologias que estão moldando o futuro da sociedade.',
    date: '2025-09-23T11:00:00Z',
    type: database.PublicationType[3],
    author: database.Author[1],
    sharedWith: [database.Guest[1], database.Guest[3]],
};

for (let item in database) {
    const NODE = database[item];
    for (let i in NODE) {
        NODE[i].id = i;
    }
}