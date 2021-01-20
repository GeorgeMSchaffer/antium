"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
/**
 * Todo Schema
 */
const todoSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
/**
 * Statics
 */
todoSchema.statics = {
    /**
     * Get Todo
     * @param {ObjectId} id - The objectId of todo.
     */
    get(id) {
        return this.findById(id)
            .execAsync()
            .then((todo) => {
            if (todo) {
                return todo;
            }
        });
    }
};
exports.default = mongoose_1.default.model('Todo', todoSchema);
//# sourceMappingURL=todo.js.map