import NextCors from 'nextjs-cors';
import cookie from 'cookie';


export default async function handler(req, res) {
  // Run cors
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'POST'],
    origin: 'https://vlacosta.ru',
    optionsSuccessStatus: 200,
  });

  // const cookies = cookie.parse(req);
  res.json({ cookies: 0 })
}
