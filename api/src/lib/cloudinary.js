const {v2: cloudinary} =  require("cloudinary");

cloudinary.config({ 
    cloud_name: 'marketplace-pablo', 
    api_key: '768957638919577', 
    api_secret: 'dMvaVk2z1REj84e68xCytiZM7Wk' 
});

module.exports = {
    cloudinary
}