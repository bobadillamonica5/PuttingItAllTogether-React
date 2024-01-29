
const urlApi = 'https://fsa-puppy-bowl.herokuapp.com/api';
const cohort = '/2310-fsa-et-web-pt/players'

const fetchPlayers = async () => {
    
    console.log('api running!')

    try {

        const response = await fetch(urlApi + cohort);
        const result = await response.json();
        return result;

    } catch (error) {
      
        console.log('error: ', error)
    
    }
}

export default fetchPlayers;