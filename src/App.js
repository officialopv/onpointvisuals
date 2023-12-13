import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import ots from './video/ots.gif';
import reels from './video/reels.gif';
import opvIntro from "./video/nobars.gif";
import wedding from "./video/wedding.gif";
import content from './images/content.png';
import miami from './images/miami-night.jpg';
import musicVideo from './video/musicVideos.gif';
import logo from './images/opv logo white png.png';
import blacklogo from './images/opv official logo .png';
import useWindowDimensions from './components/useWindowDimensions';
import { Layout, Menu, Image, Button, Card, Modal, Carousel, Divider } from 'antd';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

function App() {
  const packages =
  [
    {
      name: "On The Street Series",
      // background: ots,
      desc: "",
    },
    {
      name: "Music Videos",
      // background: musicVideo,
      desc: "",
    },
    {
      name: "Content Manager",
      // background: content,
      desc: "",
    },
    {
      name: "Reels",
      // background: reels,
      desc: "",
    },
    {
      name: "Weddings",
      // background: wedding,
      desc: "",
    },
    {
      name: "Photos/Logos Editing",
      // background: miami,
      desc: "",
    },
  ]

  const [packBackground, setPackBackground] = useState(miami);

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'black' }}>
        <div style={{float: 'left', width: '260px', height: '50px', margin: '8px 24px 16px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <img src={logo} alt='logo' style={{width: '100px'}}/>
          <h1 style={{color: 'white', margin: '0px 0px 0px 5px', fontWeight: 'bold'}}>OFFICIAL OPV</h1>
        </div>
        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} style={{backgroundColor: 'black'}}>
          <Menu.Item key="1" style={{backgroundColor: 'black'}}><a href='#home' style={{color: 'white'}}>HOME</a></Menu.Item>
          <Menu.Item key="2" style={{backgroundColor: 'black'}}><a href='#packages' style={{color: 'white'}}>PACKAGES</a></Menu.Item>
          <Menu.Item key="3" style={{backgroundColor: 'black'}}><a href='#prevWork' style={{color: 'white'}}>PREVIOUS WORKS</a></Menu.Item>
          <Menu.Item key="4" style={{backgroundColor: 'black'}}><a href='#contact' style={{color: 'white'}}>CONTACT</a></Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="App">
          <div style={{width: '100%', backgroundColor: 'black',}}>
            <div id='home' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
              backgroundImage: `url(${opvIntro})`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat',
              backgroundSize: `${useWindowDimensions().width}px ${useWindowDimensions().width / 2.41509433962}px`,
              scrollMarginTop: '64px', minHeight: `${useWindowDimensions().width / 2.41509433962}px`, backgroundColor: 'black',
              marginTop: 64
            }}>
            </div>
            <div style={{padding: 20}}>
              <h1 style={{color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 25,}}>
                welcome to on point visuals
              </h1>
              <Button size='large' style={{fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', color: 'white',
                backgroundColor: 'black', borderColor: 'white'
              }}>
                <a href='#packages'>packages we provide</a>
              </Button>
            </div>
          </div>
          <div id='packages' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column',
            padding: 20, backgroundImage: `url(${packBackground})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px', backgroundColor: 'black', justifyContent: 'center',
            backgroundSize: `${useWindowDimensions().width}px ${useWindowDimensions().width / 2.333333333}px`,
            minHeight: `${useWindowDimensions().width / 2.333333333}px`
          }}>
            <h1 style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 30, opacity: packBackground == miami ? 1 : 0.25}}>PACKAGES</h1>
            <div style={{display: 'flex', flexDirection: useWindowDimensions().width > 900 ? 'row' : 'column'}}>
              {
                packages.map((item, key) =>
                  {
                    if (key < 3)
                      return (
                        <Card
                          hoverable
                          onMouseEnter={() => setPackBackground(item.background)}
                          onMouseLeave={() => setPackBackground(miami)}
                          style={{ width: 240, margin: 20, opacity: packBackground == miami ? 1 : 0.25 }}
                        >
                          <Meta title={item.name} /*description={`${item.desc}`}*/ style={{textAlign: 'center'}}/>
                        </Card>
                      )
                  })
              }
            </div>
            <div style={{display: 'flex', flexDirection: useWindowDimensions().width > 900 ? 'row' : 'column'}}>
              {
                packages.map((item, key) =>
                  {
                    if (key >= 3)
                      return (
                        <Card
                          hoverable
                          onMouseEnter={() => setPackBackground(item.background)}
                          onMouseLeave={() => setPackBackground(miami)}
                          style={{ width: 240, margin: 20, opacity: packBackground == miami ? 1 : 0.25 }}
                        >
                          <Meta title={item.name} /*description={`${item.desc}`}*/ style={{textAlign: 'center'}}/>
                        </Card>
                      )
                  })
              }
            </div>
            <p style={{
              textAlign: 'center', fontWeight: 'bold', fontSize: 20, padding: 10,
              color: 'white', backgroundColor: 'black', marginTop: 10, opacity: packBackground == miami ? 1 : 0.25
            }}>
              **PRICES VARY DEPENDING ON WHAT IS BEING ASK**
            </p>
          </div>
          <div style={{width: '100%', backgroundColor: 'white', height: 5}} />
          <div id='prevWork' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column',
            padding: 20, backgroundAttachment: 'fixed', backgroundPosition: 'center',
            scrollMarginTop: '64px', backgroundColor: 'black', justifyContent: 'center',
          }}>
            <h1 style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>PREVIOUS WORKS</h1>
            <div style={{display: 'flex', flexDirection: useWindowDimensions().width > 900 ? 'row' : 'column'}}>
              <iframe width="320" height="320 / 1.777777778" style={{margin: 10}} src="https://www.youtube.com/embed/XL5-hBJd5fQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="320" height="320 / 1.777777778" style={{margin: 10}} src="https://www.youtube.com/embed/SDlAge5B-uc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="320" height="320 / 1.777777778" style={{margin: 10}} src="https://www.youtube.com/embed/_zItA7WV4tQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="320" height="320 / 1.777777778" style={{margin: 10}} src="https://www.youtube.com/embed/r010KJdrAXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div style={{width: '100%', backgroundColor: 'white', height: 5}} />
          <div id='contact' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column',
            padding: 20, backgroundAttachment: 'fixed', backgroundPosition: 'center',
            scrollMarginTop: '64px', backgroundColor: 'black', justifyContent: 'center',
          }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img src={blacklogo} />}
            >
              <Meta description={<a target="_blank" rel="noreferrer" href='https://www.instagram.com/OfficialOPV/'>INSTAGRAM</a>} style={{textAlign: 'center'}}/>
              <Meta description={<a target="_blank" rel="noreferrer" href=''>EMAIL</a>} style={{textAlign: 'center'}}/>
            </Card>
          </div>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Made By ANT DESIGNS LLC
        <br />
        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/antdesignsllc/'>INSTAGRAM</a>
        <br />
        <a target="_blank" rel="noreferrer" href='https://antdesignsllc.github.io/antdesllc/'>WEBSITE</a>
      </Footer>
    </Layout>
  );
}

export default App;
