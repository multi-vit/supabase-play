import {supabase} from "./supabase.js";

const countriesToSeed = [{name: "England"}, {name: "USA"}, {name: "Germany"}];
const citiesToSeed = [{name: "London"}, {name: "Washington"}, {name: "Berlin"}];

console.log("Seeding countries table");

const countries = await supabase
    .from('countries')
    .insert(countriesToSeed)
    .select();

if(countries.error) {
    console.log(countries.error);
    exit;
}

console.log(countries.data);

console.log("Seeding cities table");

for(let i = 0; i < countries.data.length; i++){
    const {data, error} = await supabase
        .from('cities')
        .insert([{name: citiesToSeed[i].name, country_id: countries.data[i].id}])
        .select();
    if(error){
        console.log(error);
        process.exit();
    }
    console.log("City inserted: ", data)
}