const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },

    category: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
    },

    author: {
      type: String,
    },
    image: {
      type: String,
    },
    comments: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
