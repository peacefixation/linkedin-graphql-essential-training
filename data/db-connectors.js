import mongoose from "mongoose";
import { Sequelize, DataTypes } from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:password@localhost:27017?authMechanism=DEFAULT', {
    useNewUrlParser: true,
    dbName: 'widgets',
});

const widgetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    soldout: {
        type: String
    },
    inventory: {
        type: String
    },
    stores: {
        type: Array
    }
});

const Widgets = mongoose.model('widgets', widgetSchema);

// create an in-memory sqlite instance
const sequelize = new Sequelize('sqlite::memory');

// define categories schema
const Categories = sequelize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING,
});

// populate categories with fake data
Categories.sync({ force: true })
    .then(() => {
        _.times(5, (i) => {
            Categories.create({
                category: casual.word,
                description: casual.sentence,
            })
        })
    }).catch(err => {
        console.error(err);
    });

export { Widgets };
