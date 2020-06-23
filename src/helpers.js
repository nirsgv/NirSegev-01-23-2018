// const key = 'S0su97sJn7O1s0GZy5YqbaBJg2U0ep8M';
// const key = 'zmNAKJCZG5PaTcd6yCZ8fqWGHGGac4J2';
const key = '7SQlNPpxqISsSHJjy9XG1wOK8Krh0XMK';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch (base + query);
    const data = await response.json();

    return data[0];
};

const getCurrentConditions = async (cityKey) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
    const query = `?apikey=${key}`;

    const response = await fetch (base + query);
    const data = await response.json();
    console.log(data[0]);
    return data[0];
};

const autoComplete = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch (base + query);
    const data = await response.json();

    return data;
};


// autoComplete('Stockholm')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

export {
    getCity,
    autoComplete,
    getCurrentConditions
}