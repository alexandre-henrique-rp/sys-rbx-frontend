/* eslint-disable no-undef */
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const token = process.env.ATORIZZATION_TOKEN;
const STRAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default async function PostTrello(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const ERROR = req.body;
    const DodyData = {
      data: {
        ...ERROR,
      },
    };

    await STRAPI.post(``, DodyData)
      .then((rest: any) => {
        res.status(rest.status || 201).json(res);
      })
      .catch((err: any) => {
        res.status(err.response.status || 400).send(err.response.data);
      });
  } else {
    return res.status(405).send({ message: "Only POST requests are allowed" });
  }
}
