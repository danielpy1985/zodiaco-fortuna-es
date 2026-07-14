export default async function handler(req, res) {
    const { code } = req.query;
    if (!code) return res.json({ used: true });

    // 這裡先用簡單方式，之後可再升級
    return res.json({ used: false });
}