import { BackgroundImage, DirectoryItemContainer } from "../../components/directory-item/directory-item.style";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const imageUrl = "src/assets/jcb_header_image.jpg";
  return (
    <><div
    style={{
      fontSize: '3.2vw',
      width: '100%',
      height: '100%',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1>Building Bharat </h1>
    
  </div>
  <h5 style={{textAlign:'center',paddingBottom:'50px'}}>Bharat's Biggest Heavy Equipment Renting platform</h5>
  
  {/* <div>
  <DirectoryItemContainer>
  <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
  </DirectoryItemContainer>
  </div> */}

<DirectoryItemContainer
  style={{height:'60vh'}}
>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </DirectoryItemContainer>

  <div
    style={{
      fontSize: '2.2vw',
      width: '100%',
      height: '100%',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'20px'
    }}
  >
    <h4>Choose your City</h4>
  </div>
  <Directory /></>
  );
};

export default Home;
