const qrService = require("../service/qrService");

// Renderizar la vista principal con valores iniciales
const renderHome = (req, res) => {
    res.render("index", { qrCodeDataUrl: null, error: null });
};

// Generar código QR y mostrarlo en la vista
const generateQR = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.render("index", { qrCodeDataUrl: null, error: "Debe ingresar un texto o URL" });
        }

        const qrCodeDataUrl = await qrService.generateQRCode(text);
        res.render("index", { qrCodeDataUrl, error: null });
    } catch (error) {
        res.render("index", { qrCodeDataUrl: null, error: "Error al generar el código QR" });
    }
};

module.exports = { renderHome, generateQR };
