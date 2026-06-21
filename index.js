const express = require('express');
const { makeBadge } = require('badge-maker');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/badge/:data/:logo', (req, res) => {
    // Splits "label-message" from URL
    const [label, ...messageParts] = req.params.data.split('-');

    const svg = makeBadge({
        label: label || 'const',
        message: message || 'badges',
        color: req.query.color || 'blue',
        style: req.query.style || 'flat'
    });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`const-badges online at port ${PORT}`));
