import { withValidation } from 'hofs/withValidation';
import { songsParamsSchema } from 'schemas/songsParamsSchema';
import { getSongs } from 'services/databaseService';

export default withValidation(['GET'], {
  query: songsParamsSchema,
})(async (req, res) => {
  const { skip, take } = req.query;
  const songs = await getSongs(skip, take);
  res.status(200).send(songs);
});
