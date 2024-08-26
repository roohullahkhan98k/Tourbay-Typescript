import React from 'react';
import { useNavigate } from 'react-router-dom'; 




const Tour: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.leftContainer}>
          <img src="./Logo.png" alt="Tourbay Logo" style={styles.logo} />
        </div>
        <div style={styles.linksContainer}>
          <div style={styles.links}>
            <button style={styles.link} onClick={() => navigate('/my-tours')}>Add Tours</button>
            <button style={styles.link} onClick={() => navigate('/add-tours')}>Book Tours</button>
            <button style={styles.link} onClick={() => navigate('/book-tour')}>My Tours</button>
          </div>
        </div>
        <div style={styles.rightContainer}>
          <button style={styles.exploreButton} onClick={() => navigate('/Main')}>Explore Now</button>
        </div>
      </header>
      <main style={styles.main}>
        <div style={styles.contentContainer}>
          <div style={styles.textContainer}>
            <h1 style={styles.title}>Explore the New World</h1>
            <img 
              src={require('../assets/line below blurb.svg').default} 
              alt="Stylish Line Below Blurb"
              style={styles.lineBelowBlurb} 
            />
            <h1 style={styles.title}>with Tourbay</h1>
            <p style={styles.subtitle}>No matter where in the world you want to go, we can help get you there and make your tour a stupendous memory.</p>
            <button style={styles.exploreButton2} onClick={() => navigate('/Main')}>Explore Now</button>
          </div>
          <div style={styles.imagesContainer}>
            <img 
              src="https://s3-alpha-sig.figma.com/img/1957/8277/f49718f7ebc3e46252acb670c66e2d3f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LqmCz0M8OxxZXEfpig3-9W0ZRgfH2FROMxKrd4Wa1DDTX8-6EpgyxzWO48GgCnA6pCiiulWNR5U79aY--9OMHpXrx~S1q9BBLnEvhTFqnyQ2nwbZ373fN9GXLX7GNz4J5KXIn-DhnrSgO5l6I40guvRI0vvNZ7cTagbo7XgwtBCkzinZqVEyrv1z8tahZYwuDwnZXgd9Lay1OHzhOSj0gUZ9iRo-cDdgGeRT-sdxljo5-9zKJjWd7r6~WlhmH~cgI4QoGpVg0gV4JURRE1knT7ndemlH8Sx2JTaFmaVHkzy-Jgmex5qPZBdpfyp3odcORyKmO9XnxRRaCzX8J-JoKA__" 
              alt="Large Tourism"
              style={styles.largeImage}
            />
            <div style={styles.smallImagesContainer}>
              <img 
                src="https://s3-alpha-sig.figma.com/img/e9ca/5df2/7b9b8ac531a78a1374f28f1477a410dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4ucrNq6-f4DFfqyvVdO18-QWctuuTSOCOCTBQomh3jFoSkO-nZvi53pulFbLiH1IIEQcxVGptqkqvVAnAe7oUf~t69yR6R4DbvwY0OZWLP1hPP-FeX9HA7ITjVVdtF9LzHF22dvI2OPyw1t9-1MVMdfA4lbCSsH35VPHcYVt5aEQbsAv44GqNUWsleTjuHFC7tV4DqRidnqd3T5RzZ5GsSgXMzh5wttSd9Q8C1ie3gi~eyavbJM6osprKw-wgkXN~RTVyUjjFhg~GWWAsiAj0cL6cTCGvMIWgm7Yk79S~KcUa6-SbxRaOu9sbNpkXVUVSeisU6nDwtoKtUS86usMw__" 
                alt="Small Tourism 1"
                style={styles.smallImageTop}
              />
              <img 
                src="https://s3-alpha-sig.figma.com/img/8c83/e95f/494920cd469b3bb846c5bbe025eb00e1?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NAiTqYFwWlBB4dCs5bwbvYUroMZmDLM1e1xkzFdK5GMNy1AVsmfXnsWkLmdvp8DrZ2Zf~~bwLKHEqdC57eaBMGofYObEwDF6OoYqdtJnBDAN6i5qAdsxhckPCLywOSnSysuuzWRdIf~iWEzWymsWxnobGsP6Ut3CowjzM-icYqJ09yDJnqvRd2dWNnH9~ctRFJ32fkSBLpccKkGRNj8fyUPKPWwCOxcJAQmk32uxGBIu3iW-heYtGflvGntFJ18Tz387blUIBVtDfWaEtMzYgJLpVLQ4apUAEZT-OU4gLLbDE36-pQXZrIG22~Sogdla4-kQSfG1wJ6gSlEkBZBJ~A__" 
                alt="Small Tourism 2"
                style={styles.smallImageBottom}
              />
            </div>
            <img 
              src={require('../assets/Vector1.svg').default} 
              alt="SVG Illustration"
              style={styles.svg}
            />
            <img 
              src={require('../assets/line below blurb.svg').default} 
              alt="Stylish Line Below Blurb"
              style={styles.lineBelowBlurb2} 
            />
            
          </div>
        </div>
      </main>
    </div>
  );
};
type CustomStyles = {
  container:React.CSSProperties,
  lineBelowBlurb2:React.CSSProperties,
  header:React.CSSProperties,
  leftContainer:React.CSSProperties,
  rightContainer:React.CSSProperties,
  logo:React.CSSProperties,
  exploreButton: React.CSSProperties,
  exploreButton2:React.CSSProperties,
  main:React.CSSProperties,
  contentContainer:React.CSSProperties,
  textContainer:React.CSSProperties,
  subtitle:React.CSSProperties,
  lineBelowBlurb:React.CSSProperties,
  imagesContainer: React.CSSProperties,
  smallImagesContainer:React.CSSProperties,
  linksContainer:React.CSSProperties,
  links:React.CSSProperties,
  link:React.CSSProperties,
  largeImage:React.CSSProperties,
  smallImageTop:React.CSSProperties,
  title:React.CSSProperties,
  smallImageBottom:React.CSSProperties,
  svg:React.CSSProperties,



  
};
const styles: CustomStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
  },
  lineBelowBlurb2:{
    position: 'absolute',
    transform: 'translateX(-50%) rotate(320deg)',
    zIndex: -1,
    marginLeft:'450px',
    width:'100%'


  },
  header: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    paddingTop: '30px',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 1,
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '100px',
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '100px',
  },
  logo: {
    height: '26px',
    objectFit: 'contain',
  },
  exploreButton: {
    backgroundColor: '#F16B51',
    color: '#fff',
    padding: '20px 35px',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  exploreButton2: {
    backgroundColor: '#F16B51',
    color: '#fff',
    padding: '20px 35px',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    marginTop: '30px',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    textAlign: 'left',
    backgroundColor: '#ffffff',
    padding: '100px',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    margin: '0',
    position: 'relative',
  },
  textContainer: {
    maxWidth: '600px',
  },
  title: {
    fontSize: '55px',
    fontWeight: 'bold',
    color: '#000',
    margin: '0',
  },
  lineBelowBlurb: {
    width: '30%',
    height: 'auto',
  },
  subtitle: {
    fontSize: '29px',
    color: 'black',
    margin: '10px 0 0',
  },
  imagesContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
  },
  largeImage: {
    width: '300px',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  smallImagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  smallImageTop: {
    width: '300px',
    height: '245px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  smallImageBottom: {
    width: '300px',
    height: '245px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  svg: {
    position: 'absolute',
    bottom: '100px',
    left: '0',
    width: '100%',
    height: '600px',
    zIndex: -1,
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000000',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
} as const;

export default Tour;
