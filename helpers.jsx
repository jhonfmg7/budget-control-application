export const checkBudget = ( budget, remainging ) =>{
    let clase;

    if( (budget / 4) > remainging ) {
        clase = 'alert alert-danger';
    } else if ( (budget / 2) > remainging ) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert-success'
    }

    return clase;
}