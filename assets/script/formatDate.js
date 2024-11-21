export default function formatDate(date) {
    const options = { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    };
    const formatter = new Intl.DateTimeFormat('pt-BR', options);
    return formatter.format(new Date(date));
}