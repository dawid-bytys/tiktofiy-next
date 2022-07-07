import dynamic from 'next/dynamic';
import type { SeoProps } from '../utils/types';

const Seo = dynamic<SeoProps>(() => import('components/Seo').then(mod => mod.Seo));

const Home = () => {
	return (
		<>
			<Seo title="Tiktofiy! • find your favourite song" />
		</>
	);
};

export default Home;
