import withTransition from '../../hoc/withTransition';

const Glow = () => {
  return <div className="inset-0 absolute bg-black"></div>;
};

export default withTransition(Glow, 0.4);
