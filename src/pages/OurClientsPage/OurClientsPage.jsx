/* eslint-disable react/jsx-no-comment-textnodes */
import { SliderClients } from '../../components/SliderClients';
import '../../styles/components/our_clients.scss';

export const OurClients = () => {

  return (
    <div className="our-clients">
      <div className="our-clients__content">
        <div className="container">
          <h2 className="main__page-title our-clients__title">our clients say</h2>
        </div>

        <SliderClients />
      </div>
    </div>
  );
}
