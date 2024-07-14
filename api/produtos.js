import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/db.json');

export default function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.status(500).json({ error: 'Failed to read data' });
                    return;
                }
                const produtos = JSON.parse(data).produtos;
                res.status(200).json(produtos);
            });
            break;
        case 'POST':
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const novoProduto = JSON.parse(body);
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        res.status(500).json({ error: 'Failed to read data' });
                        return;
                    }
                    const jsonData = JSON.parse(data);
                    jsonData.produtos.push(novoProduto);
                    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), err => {
                        if (err) {
                            res.status(500).json({ error: 'Failed to write data' });
                            return;
                        }
                        res.status(201).json(novoProduto);
                    });
                });
            });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
