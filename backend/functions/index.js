import functions from "firebase-functions";

import express from "express";
import * as cors from 'cors';
import makeCallback from "./express-callback";
import {
    getListings
} from "./APIs/drivers/homes";

const app = express();
app.use(cors({ origin: "*" }));

app.get('/listings', makeCallback(getListings));