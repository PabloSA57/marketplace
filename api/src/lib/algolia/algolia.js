const algoliasearch = require('algoliasearch');
require('dotenv').config();

const {
        ALGOLIA_API_KEY
} = process.env;

const client = algoliasearch("D9KIM79H7I", ALGOLIA_API_KEY);

const store_algolia = client.initIndex('store');


const newStore_ALG = async (record) => {
    try {
        const newPet = await store_algolia.saveObject(record).wait();
        return newPet;
    } catch (error) {
        console.log({algoliaError: error});
        return error;
    }
}

const storeAround_ALG = async (lat, lng) => {
    try {
        const {hits, ...rest} = await store_algolia.search("", {
            aroundLatLng: [lat , lng].join(","),
            aroundRadius: 5000,
        })
        console.log(rest)
        return hits
    } catch (error) {
        return error
    }
}

module.exports = {
    newStore_ALG,
    storeAround_ALG
}