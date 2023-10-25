import axios from "axios";

export default async function GetPedido(id: string) {
  const token = process.env.ATORIZZATION_TOKEN;
  await axios({
    method: 'GET',
    url:
      process.env.NEXT_PUBLIC_STRAPI_API_URL +
      '/businesses/' +
      id +
      '?populate=*',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(async (Response) => {
      // console.log(Response.data.data);
      return Response.data.data;
    })
    .catch((err) => {
      console.log(err.response.data.error.details);
      return err.response.data.error.details;
    });
}
