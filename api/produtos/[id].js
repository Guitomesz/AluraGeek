import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/db.json');

export default function handler(req, res) {
    const { method } = req;
    const { id } = req.query;

    // Leitura do arquivo JSON
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read data' });
            return;
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            res.status(500).json({ error: 'Failed to parse data' });
            return;
        }

        const produtoIndex = jsonData.produtos.findIndex(produto => produto.id === parseInt(id));
        if (produtoIndex === -1) {
            res.status(404).json({ error: 'Produto not found' });
            return;
        }

        switch (method) {
            case 'GET':
                res.status(200).json(jsonData.produtos[produtoIndex]);
                break;

            case 'PUT':
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    const updatedProduto = JSON.parse(body);
                    jsonData.produtos[produtoIndex] = updatedProduto;
                    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), writeErr => {
                        if (writeErr) {
                            res.status(500).json({ error: 'Failed to write data' });
                            return;
                        }
                        res.status(200).json(updatedProduto);
                    });
                });
                break;

            case 'DELETE':
                jsonData.produtos.splice(produtoIndex, 1);
                fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), writeErr => {
                    if (writeErr) {
                        res.status(500).json({ error: 'Failed to write data' });
                        return;
                    }
                    res.status(200).json({ message: 'Produto deleted successfully' });
                });
                break;

            default:
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    });
}
