const mongoose=require('mongoose');
const { type } = require('os');

const users=new mongoose.schema({
age:{number},
Gender:{stringify},
Experience:{number},
type
})

// - **String** `name`: Name of the faculty member.
//      - **Number** `age`: Age of the faculty member.
//      - **String** `gender`: Gender of the faculty member.
//      - **Number** `exp`: Experience of the faculty member.
//      - **String** `type`: Type of employment (e.g., Full Time, Part Time).
//      - **String** `qualification`: Qualification of the faculty member (e.g., Ph.D, Master's).