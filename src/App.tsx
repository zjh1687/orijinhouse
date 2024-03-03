import { FullPage, Slide } from 'react-full-page';
import styled from 'styled-components';

const Test = styled.video`
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 100;
  padding: 0;
  background: url(polina.jpg) no-repeat;
  background-size: cover;
`;

function App() {
  return (
    <div className="text-[100px]">
      <FullPage>
        <Slide>
          <Test autoPlay playsInline muted loop>
            <source src="/1.mp4" type="video/mp4" />
          </Test>
        </Slide>
        <Slide>
          <Test autoPlay playsInline muted loop>
            <source src="/2.mp4" type="video/mp4" />
          </Test>
        </Slide>
        <Slide>
          <Test autoPlay playsInline muted loop>
            <source src="/3.mp4" type="video/mp4" />
          </Test>
        </Slide>
        <Slide>
          <Test autoPlay playsInline muted loop>
            <source src="/4.mp4" type="video/mp4" />
          </Test>
        </Slide>
        <Slide>
          <iframe
            src="https://my.spline.design/elegantbeautyofdarkaesthetics-0652af07349e1533a815ee2c4db6055f/"
            width="100%"
            height="100%"
          ></iframe>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
