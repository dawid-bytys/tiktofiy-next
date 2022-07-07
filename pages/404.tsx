import dynamic from 'next/dynamic';
import type { SeoProps } from '../utils/types';

const Seo = dynamic<SeoProps>(() =>
	import(/* webpackChunkName: "Seo" */ '../components/Seo').then(mod => mod.Seo),
);

const NotFound404 = () => {
	return (
		<>
			<Seo title="Tiktofiy! • 404" />
			<main className="flex-1">NotFound404</main>;
		</>
	);
};

export default NotFound404;
