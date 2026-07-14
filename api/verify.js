import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    const { code } = req.query;
    
    if (!code) {
        return res.json({ used: true });
    }

    const key = `zodiac_used:${code}`;
    const isUsed = await kv.get(key);

    if (isUsed) {
        return res.json({ used: true });
    } else {
        // 標記為已使用，有效期30天
        await kv.set(key, 'true', { ex: 86400 * 30 });
        return res.json({ used: false });
    }
}
