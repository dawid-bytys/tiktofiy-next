import dynamic from 'next/dynamic';
import { Main404 } from 'components/Main404/Main404';
import type { SeoProps } from 'utils/types';

const Seo = dynamic<SeoProps>(() =>
	import(/* webpackChunkName: 'Seo' */ 'components/Seo').then(mod => mod.Seo),
);

const NotFound404 = () => {
	return (
		<>
			<Seo title="Tiktofiy! • 404" />
			<Main404 />
		</>
	);
};

export default NotFound404;
