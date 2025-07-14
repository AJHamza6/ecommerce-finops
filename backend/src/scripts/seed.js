import mongoose from 'mongoose';
import Product from '../models/product.js'; 

(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Product.deleteMany({});
  await Product.insertMany([
    { title: 'iPhone 15',  price: 999, photos: [] },
    { title: 'Galaxy S24', price: 899, photos: [] },
    { title: 'Pixel 9',    price: 799, photos: [] },
  ]);

  console.log(' Demo products inserted');
  await mongoose.disconnect();
  process.exit(0);
})();
