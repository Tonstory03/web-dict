import * as mongoose from 'mongoose';
import * as timestamps from 'mongoose-timestamp';

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
});

WordSchema.virtual('id').get(function () {
  return this._id.toString();
});

WordSchema.plugin(timestamps);

export default WordSchema;
