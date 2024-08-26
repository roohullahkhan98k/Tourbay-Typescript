import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faClock, faCheck,faSun,faCloud} from '@fortawesome/free-solid-svg-icons';

const Viewdetails: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Tours');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const cardData = {
    id: 'Pérez Art Museum Miami',
    price: '$50-$200',
    duration: '3 days',
  };

  const handleNavigation = (path: string, link: string) => {
    setActiveLink(link);
    navigate(path);
  };
  const handleBookNow = () => {
    navigate('/confirm'); 
  };

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.leftContainer}>
          <img src="/Logo.png" alt="Tourbay Logo" style={styles.logo} />
        </div>
        <div style={styles.linksContainer}>
          <div style={styles.links}>
            <button
              style={{
                ...styles.link,
                borderBottom: activeLink === 'Tours' ? '2px solid #F16B51' : 'none',
                color: activeLink === 'Tours' ? '#F16B51' : 'black',
              }}
              onClick={() => handleNavigation('/Tours', 'Tours')}
            >
              Tours
            </button>
            <button
              style={{
                ...styles.link,
                borderBottom: activeLink === 'Add Tours' ? '2px solid #F16B51' : 'none',
                color: activeLink === 'Add Tours' ? '#F16B51' : 'black',
              }}
              onClick={() => handleNavigation('/Addtours', 'Add Tours')}
            >
              Add Tours
            </button>
            <button
              style={{
                ...styles.link,
                borderBottom: activeLink === 'My Tours' ? '2px solid #F16B51' : 'none',
                color: activeLink === 'My Tours' ? '#F16B51' : 'black',
              }}
              onClick={() => handleNavigation('/Mytours', 'My Tours')}
            >
              My Tours
            </button>
          </div>
        </div>
      </header>

      <main style={{ paddingBottom: '200px' }}>

        <h1 style={styles.heading}>{id}</h1>
        <div style={styles.infoContainer}>
          <div style={styles.iconWithText}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
            <span>Miami</span>
          </div>
          <div style={styles.iconWithText}>
            <FontAwesomeIcon icon={faDollarSign} style={styles.icon} />
            <span>{cardData.price}</span>
          </div>
          <div style={styles.iconWithText}>
            <FontAwesomeIcon icon={faClock} style={styles.icon} />
            <span>{cardData.duration}</span>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img src="/big.png" alt="Ima 1" style={styles.largeImage} />
          <div style={styles.smallImagesContainer}>
            <div style={styles.smallImageRow}>
              <img src="/s1.png" alt="Ima 2" style={styles.smallImage} />
              <img src="/s2.png" alt="Ima 3" style={styles.smallImage} />
            </div>
            <div style={styles.smallImageRow}>
              <img src="/s3.png" alt="Ima 4" style={styles.smallImage} />
              <img src="/s4.png" alt="Ima 5" style={styles.smallImage} />
            </div>
          </div>
        </div>
        <div style={styles.descriptionContainer}>
          <div style={styles.descriptionLine}>
            <span>The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami-Dade County—is a contemporary art museum that relocated in 2013 to</span>
          </div>
          <div style={styles.descriptionLine}>
            <span style={styles.centerAlign}>the Museum Park in Downtown Miami, Florida.</span>
          </div>
          <div style={styles.descriptionLine}>
            <span>Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building</span>
          </div>
          <div style={styles.descriptionLine}>
            <span style={styles.centerAlign}>designed by Herzog & de Meuron at 1103 Biscayne Boulevard.</span>
          </div>
          <div style={styles.descriptionLine}>
            <span>PAMM, along with the $275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20-</span>
            <span style={styles.centerAlign}>acre museum Park.</span>
          </div>
        </div>
        <div style={styles.includedSection}>
          <h1 style={styles.includedHeading}>What's Included</h1>
          <div style={styles.includedItem}>
            <span>Destination</span>
            <span style={styles.lightTheme}>Miami</span>
          </div>
          <div style={styles.includedItem}>
            <span>Departure Location</span>
            <span style={styles.lightTheme}>2000 Brush St, Detroit, MI 48226, United States</span>
          </div>
          <div style={styles.includedItem}>
            <span>Return</span>
            <span style={styles.lightTheme}>7 PM on Day 3</span>
          </div>
          <div style={styles.includedItem}>
  <span>Return</span>
  <div style={styles.inlineItems}>
    <div style={styles.itemRow}>
      <span style={styles.itemTheme}><FontAwesomeIcon icon={faCheck} style={{backgroundColor: '#F16B51', color: '#fff', padding: '2px', borderRadius: '50%', fontSize: '10px', marginRight: '5px'}} />Basic First Add kit</span>
      <span style={styles.itemThemeRight}><FontAwesomeIcon icon={faCheck} style={{backgroundColor: '#F16B51', color: '#fff', padding: '2px', borderRadius: '50%', fontSize: '10px', marginRight: '5px'}} />Comfortable Private Booked Transparent</span>
    </div>
    <div style={styles.itemRow}>
      <span style={styles.itemTheme}><FontAwesomeIcon icon={faCheck} style={{backgroundColor: '#F16B51', color: '#fff', padding: '2px', borderRadius: '50%', fontSize: '10px', marginRight: '5px'}} />Fuel expense</span>
      <span style={styles.itemThemeRight}><FontAwesomeIcon icon={faCheck} style={{backgroundColor: '#F16B51', color: '#fff', padding: '2px', borderRadius: '50%', fontSize: '10px', marginRight: '5px'}} />Mess Tent,Kitchen Utensils,and Cook</span>
    </div>
    <div style={styles.itemRow}>
      <span style={styles.itemTheme}><FontAwesomeIcon icon={faCheck} style={{backgroundColor: '#F16B51', color: '#fff', padding: '2px', borderRadius: '50%', fontSize: '10px', marginRight: '5px'}} />Detail Guided Maps</span>
      <span style={styles.itemThemeRight}><FontAwesomeIcon icon={faCheck} style={{backgroundColor: '#F16B51', color: '#fff', padding: '2px', borderRadius: '50%', fontSize: '10px', marginRight: '5px'}} />Waterproof Tents on twin/triple Sharing</span>
    </div>
  </div>
  </div>
        </div>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', marginLeft: '175px' }}>Itinerary Schedule</h1>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '444px', height: '253px', borderRadius: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: '10px', marginRight: '70px', }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '20px 20px 0 0' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Day 1</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faSun} style={{ fontSize: '24px', marginRight: '10px' }} />
        <span>18°C</span>
      </div>
    </div>
    <ul style={{ listStyle: 'none', padding: '10px' }}>
      <li style={{ marginBottom: '10px' }}>&#8226; Tours with American Sign Language</li>
      <li style={{ marginBottom: '10px' }}>&#8226; Audio description group tours</li>
      <li style={{ marginBottom: '10px' }}>&#8226; Large-print gallery notes</li>
      <li>&#8226; Lunch Included</li>
    </ul>
  </div>
  <div style={{ width: '444px', height: '253px', borderRadius: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: '10px', marginRight: '70px', }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '20px 20px 0 0' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Day 2</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faCloud} style={{ fontSize: '24px', marginRight: '10px' }} />
        <span>10°C</span>
      </div>
    </div>
    <ul style={{ listStyle: 'none', padding: '10px' }}>
      <li style={{ marginBottom: '10px' }}>&#8226; Tours with American Sign Language</li>
      <li style={{ marginBottom: '10px' }}>&#8226; Audio description group tours</li>
      <li style={{ marginBottom: '10px' }}>&#8226; Large-print gallery notes</li>
      <li>&#8226; Lunch Included</li>
    </ul>
  </div>
  <div style={{ width: '444px', height: '253px', borderRadius: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: '10px',  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '20px 20px 0 0' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Day 3</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faCloud} style={{ fontSize: '24px', marginRight: '10px',color:''}} />
        <span>10°C</span>
      </div>
    </div>
    <ul style={{ listStyle: 'none', padding: '10px' }}>
      <li style={{ marginBottom: '10px' }}>&#8226; Tours with American Sign Language</li>
      <li style={{ marginBottom: '10px' }}>&#8226; Audio description group tours</li>
      <li style={{ marginBottom: '10px' }}>&#8226; Large-print gallery notes</li>
      <li>&#8226; Lunch Included</li>
    </ul>
  </div>
</div>
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <button
  onClick={handleBookNow}
   style={{ width:'335px ',height:'54px',padding:'12px 16px 12px 16px', fontSize: '16px', fontWeight: 'bold', color: '#fff', backgroundColor: '#F16B51', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
    Book Now
  </button>
</div>
      </main>
    </div>
  );
};

type CustomStyles = {
    header: React.CSSProperties;
    leftContainer: React.CSSProperties;
    linksContainer: React.CSSProperties;
    links: React.CSSProperties;
    link: React.CSSProperties;
    logo: React.CSSProperties;
    heading: React.CSSProperties;
    imageContainer: React.CSSProperties;
    largeImage: React.CSSProperties;
    smallImagesContainer: React.CSSProperties;
    smallImageRow: React.CSSProperties;
    smallImage: React.CSSProperties;
    infoContainer: React.CSSProperties;
    iconWithText: React.CSSProperties;
    icon: React.CSSProperties;
    descriptionContainer: React.CSSProperties;
    descriptionLine: React.CSSProperties;
    centerAlign: React.CSSProperties;
    includedSection: React.CSSProperties;
    includedItem: React.CSSProperties;
    includedHeading: React.CSSProperties;
    lightTheme: React.CSSProperties;
    itemTheme:React.CSSProperties;
    inlineItems: React.CSSProperties;
    itemRow:React.CSSProperties;
    itemThemeRight:React.CSSProperties;
}  
const styles: CustomStyles = {
  header: {
    maxWidth: '1500px',
    display: 'flex',
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '25px',
    zIndex: 1,
    marginLeft: '75px',
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '100px',
  },
  logo: {
    height: '26px',
    objectFit: 'contain',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  links: {
    display: 'flex',
    gap: '50px',
    flexBasis: '35%',
  },
  link: {
    fontSize: '18px',
    fontWeight: 'bold',
    background: 'none',
    height: '27px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'Poppins',
    paddingBottom: '5px',
  },
  heading: {
    position: 'absolute',
    top: '130px', 
    left: '175px',  
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins',
    textAlign: 'left',  
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '250px',
    gap: '30px',
  },
  largeImage: {
    width: '750px',
    height: '358px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  smallImagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  smallImageRow: {
    display: 'flex',
    gap: '30px',
  },
  smallImage: {
    width: '365px',
    height: '163px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  infoContainer: {
    position: 'absolute',
    top: '210px',
    right: '230px',
    maxWidth: '1500px',
    width: '100%',
    display: 'flex',
    gap: '30px',
  },
  iconWithText: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '',
    color: '#777',
  },
  icon: {
    color: '#777',
  },
  descriptionContainer: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    borderRadius: '8px',
    
  },
  descriptionLine: {
    // marginBottom: '10px',
    color: '#777',
  },
  centerAlign: {
    display: 'block',
    textAlign: 'center',
    marginBottom: '20px',
  },
  includedSection: {
    // padding: '20px',
    borderRadius: '15px',
    marginLeft: '190px',
    maxWidth: '1500px',
  },
  includedItem: {
    display: 'grid',
    gridTemplateColumns: ' 250px 1fr',
    padding: '20px', 
    borderBottom: '1px solid #ddd',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  includedHeading: {
    fontSize: '40px', 
    fontWeight: 'bold',
    marginBottom: '15px',
    fontFamily: 'Poppins',
  },
  lightTheme: {
    color: '#777',
    marginLeft:'300px'
  },
  inlineItems: {
    display: 'flex',
    flexWrap:'wrap',
    marginBottom: '10px',

  },
  itemTheme: {
    color: '#777',
     marginLeft:'300px',
     width: '290px'
     
  },
  itemRow:{
   display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
  alignItems: 'flex-start',
  
    },
    itemThemeRight: {
        marginLeft: '-20px',
        color: '#777',
      },
};


export default Viewdetails;
