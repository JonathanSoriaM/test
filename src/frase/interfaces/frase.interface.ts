import { Document} from 'mongoose';

export interface Frase extends Document {
    readonly word : string;
    readonly allowed : boolean;
    readonly status : string;
    readonly dateCreated : Date;
    readonly lastDateUpdated : Date;
    readonly dateDeleted : Date;

}

