/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../connection'

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name: string;
    email: string;
    curso: string;
  };
};

export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { name, email, curso } = req.body
  try {
    const results = await db.query(
      `INSERT INTO EPICEDB (name,email,curso) VALUES('${name}', '${email}', '${curso}')`
    );
    await db.end();
    console.log(results)
    return res.status(200).send('')
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: 'Falha na conexão code erro `EMAIL-300`'
    });
  }
};