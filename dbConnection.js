const mongoose = require("mongoose");
const password = "t6YzXREo0WO8Jrqw"

// mongoose.connect("mongodb+srv://sraawan:t6YzXREo0WO8Jrqw@cluster0.agk99eu.mongodb.net/?retryWrites=true&w=majority"),{
//     useNewUrlParser:true,
//     useFindandModify:false,
//     UseUndefinedTopology:true
// }
// connected from docker mongodb
mongoose.connect('mongodb://localhost:27023/docker-db',{useNewUrlParser: true})
const mogodbConn = mongoose.connection;

module.exports=  mogodbConn