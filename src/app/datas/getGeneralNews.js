"use server"

import axios from "axios";
import https from "https";

const getGeneralNews = async(options) => {

    let {lang,pageNumber} = options;

    const response = await axios.get(`
    https://inshorts.com/api/${lang}/news?category=top_stories&max_limit=10&include_card_data=true`, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });

    return response.data;
}

export default getGeneralNews;