export default async function handler(req, res) {
    const { code } = req.query;
    if (!code) return res.json({ used: true });
    return res.json({ used: false });   // 暫時先這樣
}
