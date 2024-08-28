import Transaction from "../models/transaction.model.js";

const transactionResolver = {
  Query: {
    transactions: async (_, __, context) => {
      try {
        if (context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const transaction = await Transaction.find({ userId });
        return transaction;
      } catch (error) {
        console.log("Error getting transaction", error);
        throw new Error("Error getting transaction");
      }
    },

    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (error) {
        console.log("Error getting tranaction", error);
        throw new Error(error.message || "Internal Server Error");
      }
    },

    //TODO => ADD categoriesStatistics query
  },
  Mutation: {
    createTransaction: async (_, { input }, context) => {
      try {
        const newTransaction = new Transaction({
          ...input,
          userId: context.getUser()._id,
        });
        await newTransaction.save();
        return newTransaction;
      } catch (error) {
        console.log("Error creating transaction", error);
        throw new Error(error.message || "Error creating transaction");
      }
    },
    updateTransaction: async () => {},
    deleteTransaction: async () => {},
  },
};

export default transactionResolver;
