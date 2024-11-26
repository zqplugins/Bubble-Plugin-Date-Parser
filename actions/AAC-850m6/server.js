async function(properties, context) {

const chrono = require('chrono-node');



const newDate = chrono.parseDate(properties.relative_date_string);

    return { date: newDate }

}