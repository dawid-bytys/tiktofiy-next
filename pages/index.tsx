import dynamic from 'next/dynamic';
import { MainHome } from 'components/MainHome/MainHome';
import type { SeoProps } from '../utils/types';

const Seo = dynamic<SeoProps>(() =>
	import(/* webpackChunkName: 'Seo' */ 'components/Seo').then(mod => mod.Seo),
);

const Home = () => {
	return (
		<>
			<Seo title="Tiktofiy! • find your favourite song" />
			<MainHome />
		</>
	);
};

export default Home;
