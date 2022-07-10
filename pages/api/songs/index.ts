import { withValidation } from 'hofs/withValidation';
import { getAllSongs } from 'services/databaseService';

export default withValidation(['GET'])(async (_req, res) => {
	const songs = await getAllSongs();

	res.status(200).send(songs);
});
