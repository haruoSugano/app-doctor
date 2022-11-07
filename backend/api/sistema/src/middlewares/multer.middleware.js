const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const multerMiddleware = {
    dest: "uploads",
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads");
        },
        filename: function (req, file, cb) {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const filename = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, filename);
            });
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/jpg",
            "image/png",
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type"));
        }
    },
};

module.exports = multerMiddleware;
