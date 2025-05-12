import Art from "../model/art.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";




export const uploadArt = async (req, res) => {
  try {
    const { artName } = req.body;
    const file = req.file;

    if (!artName || !file) {
      return res.status(400).json({ success: false, message: "artName and file are required" });
    }

    // Convert file to Data URI
    const fileUri = getDataUri(file);

    // Upload to Cloudinary
    const uploaded = await cloudinary.uploader.upload(fileUri.content, {
      folder: "artGallery",
    });

    // Save to MongoDB
    const newArt = await Art.create({
      artName,
      imageUrl: uploaded.secure_url,
    });

    res.status(201).json({
      success: true,
      message: "Artwork uploaded successfully",
      art: newArt,
    });

  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const getAllArt = async (req, res) => {
  try {
    const arts = await Art.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json({
      success: true,
      data: arts,
    });
  } catch (error) {
    console.error("Error fetching art:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching art.",
    });
  }
};



