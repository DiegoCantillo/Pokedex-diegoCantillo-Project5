export const colorByType = (type) => {
    switch (type) {
        case 'fire':
            return '#FB6C6C';
        case 'water':
            return '#70B7FA';
        case 'bug':
            return '#48A75F';
        case 'normal':
            return '#735159';
        case 'grass':
            return '#48D0B0';
        case 'poison':
            return '#5B2D86';
        case 'ground': 
            return '#9A6B40';
        case 'electric':
            return '#DEEEF6';
        case 'fairy':
            return '#F6E009';
        case 'fighting':
            return '#600742';
        case 'dragon':
            return '#FF7D1F';
        case 'dark':
            return '#000';
        case 'ice':
            return '#C9E4F7';
        case 'psychic':
            return '#108E94';
        case 'steel':
            return '#BAC0C1';
        case 'rock':
            return '#CE9762';
        default:
            return 'pink'
    }
}