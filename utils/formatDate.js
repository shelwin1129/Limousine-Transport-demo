//Format the date from sql into readable format
export default (dateString) => {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    return new Date(dateString).toLocaleDateString('en-MY', options).replace(',', '');
};