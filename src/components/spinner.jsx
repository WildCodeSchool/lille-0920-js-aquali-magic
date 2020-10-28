import spinner from '../../public/image/spinner.gif';

const Spinner = () => (
  <div>
    <img
      src={spinner}
      alt="...loading"
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </div>
);
export default Spinner;
