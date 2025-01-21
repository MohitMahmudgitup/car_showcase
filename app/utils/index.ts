export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'f2c57fc246mshf4dfe354a21ec6fp10271djsnbd0172af0317',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const options = {
        method: 'GET',
    };
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers : headers }) ;
    const result = await response.json();
    return result;
}