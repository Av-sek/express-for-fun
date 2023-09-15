import mongoose from 'mongoose';


export const databaseConnect = async () => {
  const databaseURL = process.env.MONGO_URI as string;
  mongoose.Promise = Promise;
  await mongoose.connect(databaseURL)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));
}