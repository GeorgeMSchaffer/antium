
import mongoose from 'mongoose';

/**
 * Todo Schema
 */
const todoSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    /*
    dueDate: {
        type: Number
    },
    */
    todo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
todoSchema.statics = {
  /**
   * Get Todo
   * @param {ObjectId} id - The objectId of todo.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((todo: any) => {
        if (todo) {
          return todo;
        }
      });
  }
};

export default mongoose.model('Todo', todoSchema);
