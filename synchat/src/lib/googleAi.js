import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAnNPcjOmCadmkPxsiE40IYrSWdT_BtSnc");

const model = genAI.getGenerativeModel({model:'gemini-1.5-flash'});

export default model;
