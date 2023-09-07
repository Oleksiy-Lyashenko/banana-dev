/* eslint-disable jsx-a11y/alt-text */
import '../../styles/components/top_page.scss';
import { Card } from '../Card/Card';

export const TopPage = () => {
  return (
    <div className="top-page">
      <div className="top-page__block container">
        <div className="top-page__text-block">
          <h2 className="top-page__main-text">
            <span className="top-page__main-text--yellow">Accelerate</span>
            <br />
            Your SuccesS with Banan.dev
          </h2>
          <p className="top-page__sub-text">
            wasting time and money hiring delinquent devs? get devotees to build your vision –
            diabolically fast
          </p>
          <button className="top-page__button">let’s go banana</button>
        </div>

        <div className="top-page__columns">
          <div className="column-1">
            <Card
              img={'./images/person/person_1.svg'}
              name={'Yevhenii F.'}
              rate={'45'}
              position={'Senior UI/UX Designer'}
              experince={'6'}
              skills={['Figma', 'Sketch', 'Photoshop', 'AEffects']}
            />
            <Card
              img={'./images/person/person_1.svg'}
              name={'Yevhenii F.'}
              rate={'72'}
              position={'Senior Back-End developer'}
              experince={'5'}
              skills={['Figma', 'Sketch', 'Photoshop', 'AEffects']}
            />
            <Card
              img={'./images/person/person_2.svg'}
              name={'Maksym L.'}
              rate={'72'}
              position={'Senior UI/UX Designer'}
              experince={'6'}
              skills={['AWS', 'Docker', 'Graphql', 'PostgreSQL']}
            />
            <Card
              img={'./images/person/person_3.svg'}
              name={'Oleg L.'}
              rate={'47'}
              position={'Senior Full-Stack Developer'}
              experince={'5'}
              skills={['Javascript', 'React', 'Typescript']}
            />
            <Card
              img={'./images/person/person_4.svg'}
              name={'Maksim P.'}
              rate={'47'}
              position={'Senior Mobile Developer'}
              experince={'6'}
              skills={['Dart', 'Firebase', 'Node', 'Flutter']}
            />
            <Card
              img={'./images/person/person_5.svg'}
              name={'Den Z.'}
              rate={'60'}
              position={'Senior Back-End Developer'}
              experince={'6'}
              skills={['Python', 'Graphql', 'PostgreSQL', 'FastAPI']}
            />
          </div>

          <div className="column-2">
            <Card
              img={'./images/person/person_6.svg'}
              name={'Alex L.'}
              rate={'50'}
              position={'Senior Full-Stack Developer'}
              experince={'4'}
              skills={['JS', 'React', 'Python', 'Django', 'Graphql']}
            />
            <Card
              img={'./images/person/person_7.svg'}
              name={'Igor H.'}
              rate={'62'}
              position={'Senior Python Developer'}
              experince={'6'}
              skills={['Python', 'Django', 'Flask', 'AWS', 'PostgreSQL']}
            />{' '}
            <Card
              img={'./images/person/person_8.svg'}
              name={'Dmitro M.'}
              rate={'72'}
              position={'Senior Java Developer'}
              experince={'10'}
              skills={['Java', 'AWS', 'Vaadin', 'Apache']}
            />{' '}
            <Card
              img={'./images/person/person_9.svg'}
              name={'Igor B.'}
              rate={'72'}
              position={'Senior PHP Designer'}
              experince={'6'}
              skills={['PHP', 'JS', 'HTML', 'CSS', 'Laravel']}
            />{' '}
            <Card
              img={'./images/person/person_10.svg'}
              name={'Oleksandr T.'}
              rate={'35'}
              position={'Middle UI/UX Designer'}
              experince={'3'}
              skills={['Figma', 'Sketch', 'Photoshop', 'AEffects']}
            />{' '}
          </div>
        </div>
      </div>

      <div className="our-client container">
        <div className="our-client__content">
          <img src="./images/tape/left-tape.svg" className="our-client__left-tape" />
          <img src="./images/tape/right-tape.svg" className="our-client__right-tape" />

          <h3 className="our-client__title">Our clients</h3>

          <div className="our-client__block-img">
            <img src="./images/clients/forbes.svg" className="our-client__img" />
            <img src="./images/clients/pocketbook.svg" className="our-client__img" />
            <img src="./images/clients/sps.svg" className="our-client__img" />
            <img src="./images/clients/syn.svg" className="our-client__img" />
            <img src="./images/clients/yotta.svg" className="our-client__img" />
          </div>
        </div>
      </div>
    </div>
  );
}
