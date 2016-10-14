'use strict';

const mongoose = require('mongoose');

// look up restrict size of upload in schema

const uploadSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

uploadSchema.virtual('length').get(function() {
  return this.text.length;
});

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload;
