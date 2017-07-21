// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Player schema
var Contact = new Schema({
        name        : String,required,
        phone1      : String,required,
        phone2      : String,required,
        add1        : String,required,
        add2        : String,required,
        city        : String,required,
        zip         : Number,required,
        Note        : String,required 
    });

var Player = new Schema({
        name        :String, required,
        numbr       :String, required,
        snaps       :Number,
        info        :Address,
}); 

var Event = new Schema({
        edate       : Date,             
        team        : [Player],
        location    : Contact
}); 

var Player  = mongoose.model("Player", PlayerSchema);
var Event = mongoose.model("Events", EventSchema);

// Export the model
module.exports = Player;
module.exports = Address; 