const express = require("express");
const QRCode = require("qrcode");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
    express.static(path.join(__dirname, "public"))
);

function getQROptions({
    transparent = false,
    dark = "#000000"
} = {}) {
    return {
        errorCorrectionLevel: "Q",

        margin: 4,

        width: 1600,

        color: {
            dark: dark,
            light: transparent
                ? "#00000000"
                : "#FFFFFFFF"
        }
    };
}

function validateURL(value) {
    if (!value || typeof value !== "string") {
        return false;
    }

    try {
        const url = new URL(value);

        return (
            url.protocol === "http:" ||
            url.protocol === "https:"
        );
    } catch {
        return false;
    }
}

app.post("/api/qr/png", async (req, res) => {
    try {
        const {
            url,
            transparent = false,
            dark = "#000000"
        } = req.body;

        if (!validateURL(url)) {
            return res.status(400).json({
                error: "Please provide a valid HTTP or HTTPS URL."
            });
        }

        const dataURL = await QRCode.toDataURL(
            url,
            {
                ...getQROptions({
                    transparent,
                    dark
                }),
                type: "image/png"
            }
        );

        const base64 = dataURL.replace(
            /^data:image\/png;base64,/,
            ""
        );

        const buffer = Buffer.from(
            base64,
            "base64"
        );

        res.setHeader(
            "Content-Type",
            "image/png"
        );

        res.setHeader(
            "Content-Disposition",
            'attachment; filename="shadow-ash-qr.png"'
        );

        res.send(buffer);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to generate PNG."
        });
    }
});

app.post("/api/qr/svg", async (req, res) => {
    try {
        const {
            url,
            transparent = false,
            dark = "#000000"
        } = req.body;

        if (!validateURL(url)) {
            return res.status(400).json({
                error: "Please provide a valid HTTP or HTTPS URL."
            });
        }

        const svg = await QRCode.toString(
            url,
            {
                ...getQROptions({
                    transparent,
                    dark
                }),
                type: "svg"
            }
        );

        res.setHeader(
            "Content-Type",
            "image/svg+xml"
        );

        res.setHeader(
            "Content-Disposition",
            'attachment; filename="shadow-ash-qr.svg"'
        );

        res.send(svg);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to generate SVG."
        });
    }
});

app.listen(PORT, () => {
    console.log("");
    console.log("======================================");
    console.log("   SHADOW ASH QR GENERATOR");
    console.log("======================================");
    console.log("");
    console.log(`Local: http://localhost:${PORT}`);
    console.log("");
});