import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const activityModel = new Schema({
    time: Date,
    values: { 
        pos: {
            lat: Number,
            long: Number
        },
        acc: {
            x: Number,
            y: Number,
            z: Number
        },
        gyr: {
            x: Number,
            y: Number,
            z: Number
        }
    }
})

export default mongoose.model('activities', activityModel)