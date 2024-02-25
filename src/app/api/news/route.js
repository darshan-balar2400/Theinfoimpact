import { JSDOM } from "jsdom";
// import fetch from "node-fetch"
import axios from "axios";
import https from "https";

const GET = async(req,res) => {

    const response = await axios.get("https://www.divyabhaskar.co.in/", { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
    const data = response.data;

    const dom = new JSDOM(data);
    const document = dom.window.document;

    let newstitlle = document.querySelector(".f3426d1d");
    console.log(newstitlle);

    res.status(200).json({msg:"success"});

}

export {GET};