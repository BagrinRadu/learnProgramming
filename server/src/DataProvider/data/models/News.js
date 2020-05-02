const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    newsText: {
        type: String,
        required: [true, 'News Text is required']
    },
    postedBy: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    course: {
        type: String,
        required: false
    }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;