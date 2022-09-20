const jwt = require("jsonwebtoken");

exports.checkToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    try {
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).send({ message: "Acesso negado" });
        }

        const secret = process.env.SECRET;

        jwt.verify(token, secret);

        next();
    } catch (err) {
        return res.status(500).send({ message: "Token inválido!" });
    }
}
