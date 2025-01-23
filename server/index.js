require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const ConnectDB = require('./database/db');
const userRoute = require('./routes/user.route');
const courseRoute = require('./routes/course.route');
const mediaRoute = require("./routes/media.route");
const purchaseRoute = require("./routes/purchaseCourse.route");
const courseProgressRoute = require("./routes/courseProgress.route");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const DIRNAME = path.resolve();

// call database connection here
ConnectDB();


// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));



// api's
app.use("/api/v1/media", mediaRoute);
app.use('/api/v1/user', userRoute);
// course api
app.use('/api/v1/course', courseRoute);
// course purchase api
app.use("/api/v1/purchase", purchaseRoute);
// course progress api 
app.use("/api/v1/progress", courseProgressRoute);

app.use(express.static(path.join(DIRNAME, "/client/dist")));

app.use("*", (_, res) => {
    res.sendFile(path.resolve(DIRNAME, "client", "dist", "index.html"))
})


app.listen(PORT, () => {
    try {
        console.log(`Server listen at PORT: ${PORT}`);
    } catch (error) {
        console.log('Something went wrong');
    }
})
