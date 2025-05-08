import mongoose, { Schema, Document } from "mongoose";

interface IConversation extends Document {
  participants: mongoose.Types.ObjectId[];   // Array of participants (users) in the conversation
  messages: mongoose.Types.ObjectId[];       // Array of messages in the conversation
  latestMessage: mongoose.Types.ObjectId;     // Reference to the latest message in the conversation
  createdAt: Date;                            // Conversation creation timestamp
  updatedAt: Date;                            // Conversation update timestamp
}

const ConversationSchema: Schema<IConversation> = new Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message", // Reference to the Message model
        required: true,
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message", // Reference to the latest Message in the conversation
      required: false,
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model<IConversation>("Conversation", ConversationSchema);

export default Conversation;
