import { supabase } from "./supabase.js"

export const deleteAllTableRows = async (tableName) => {
    const {error} = await supabase
    .from(tableName)
    .delete()
    .neq("name", null);
    if(error) {
        console.log(error); 
        process.exit();
    } else {
        console.log(`Deleted all rows from ${tableName} table!`);
    }
}

deleteAllTableRows("countries");
deleteAllTableRows("cities");