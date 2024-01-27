import { supabase } from "./supabase.js";

export const getAllCountries = async () => {
    const {data, error } = await supabase.from('countries').select()
    if(error) console.log(error)
    else return data;
}

console.log(await getAllCountries());