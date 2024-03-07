"use server"

import axios from "axios";
import https from "https";

const getNews = async(options) => {

    let {lang,category,pageNumber} = options;

    const response = await axios.get(`
    https://inshorts.com/api/${lang}/search/trending_topics/${category}?page=${pageNumber}&type=NEWS_CATEGORY`, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });

    return response.data;
}

export default getNews;