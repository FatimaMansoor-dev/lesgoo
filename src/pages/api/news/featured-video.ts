import { newsService } from 'modules/News/services';
import type { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_RESPONSES, HttpResponseType } from 'shared/constants/Http';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { data: records, error } = await newsService.getFeaturedVideo();
    if (error) return res.json({ ...HTTP_RESPONSES[HttpResponseType.ServerError], error });
    return res.json({ ...HTTP_RESPONSES[HttpResponseType.Success], records });
  }

  res.send(null);
}
