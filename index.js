const axios = require('axios');
const cheerio = requiew('cheerio');

const page_url = 'https://www.newbalance.com/';

async function getNew() {
  const { data } = await axios.get(page_url);
  const $ = cheerio.load(data);
  console.log(data);
}

getNew(data);

//hits api and returns data
