// tslint:disable: object-literal-sort-keys
import * as mongoose from 'mongoose';

export interface SourceCode {
   name: string;
   text: string;
   extension: string;
   created: string;
}

const sourceCodeSchema = new mongoose.Schema({
   name: {
      required: true,
      type: String,
   },
   extension: {
      required: true,
      type: String,
   },
   text: {
      required: true,
      type: String,
   },
   created: {
      default: Date.now(),
      type: Date,
   },
   updated: {
      type: Date,
   },
});

const sourceCodeModel = mongoose.model('SourceCode', sourceCodeSchema);

export default sourceCodeModel;
