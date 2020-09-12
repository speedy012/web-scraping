const axios = require('axios');

const page_url = 'https://www.newbalance.com/';

async function getNew() {
  const { data } = await axios.get(page_url);
  console.log(data);
}

getNew();
