const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://ilovenandini011:k4XA7XoLktCVayfJ@cluster0.ddcnspn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        process.exit(1);
    }
};