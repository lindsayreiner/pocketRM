const { Schema, model } = require("mongoose");

const querySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    contact: {
        type: Schema.Types.ObjectId,
        ref: "Contact",
    },
    notes: {type: Schema.Types.ObjectId,
        ref: "Notes",
    },
    reminder: {type: Schema.Types.ObjectId,
        ref: "Reminder",
    }
  });
  
const Query = model('Query', querySchema);

module.exports = Query;