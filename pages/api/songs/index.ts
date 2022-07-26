import { withValidation } from 'hofs/withValidation';
import { songsParamsSchema } from 'schemas/songsParamsSchema';
import { getDatabaseSongs } from 'services/server/databaseService';

export default withValidation(['GET'], {
  query: songsParamsSchema,
})(async (req, res) => {
  const { skip, take } = req.query;
  const songs = await getDatabaseSongs(skip, take);
  res.status(200).send(songs);
});
