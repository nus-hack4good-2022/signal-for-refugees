import functions from "firebase-functions";
import express from "express";
import * as cors from 'cors';

const app = express();
app.use(cors({ origin: "*" }));

