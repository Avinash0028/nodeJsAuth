import mongoose from "mongoose";
const schema = mongoose.Schema;

const TeamSchema = new schema({
    user: { type: schema.Types.ObjectId, ref: 'Event' },
    about: {type: String}
});

export default TeamSchema;