const cloudinary = require('cloudinary').v2;

require('dotenv').config();

cloudinary.config({
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    cloud_name:process.env.CLOUD_NAME,
});

// Upload Media at Cloudinary
const uploadMedia = async (file) => {
    try {
        const uploadResponse = await cloudinary.uploader.upload(file, {
            resource_type:"auto"
        });
        return uploadResponse;
    } catch (error) {
        console.log(error)
    }
};


// Delete Photo From Cloudinary
const deleteMediaFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.log(error)
    }
};


// Delete Video From Cloudinary
const deleteVideoFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId, {resource_type:"video"});
    } catch (error) {
        console.log(error);
    }
};



module.exports = {uploadMedia, deleteMediaFromCloudinary, deleteVideoFromCloudinary};