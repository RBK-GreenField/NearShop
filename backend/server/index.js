const express = require("express");
const userRoutes = require('./routes/user.routes')
const commentRoutes = require('./routes/comment.routes')
const productRoutes = require('./routes/product.routes')
const cartRoutes = require('./routes/cart.routes')
const cors = require('cors');
const bodyParser = require('body-parser')

const User = require('./database-mongo');
const Comment=require('./database-mongo')
const app = express();

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
