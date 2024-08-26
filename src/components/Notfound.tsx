import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Notfound: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const navigate = useNavigate();
  const { locationName } = useParams<{ locationName: string }>();

  const handleNavigation = (path: string, link: string) => {
    setActiveLink(link);
    navigate(path);
  };

  return (
    <>
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
                color: activeLink === 'Tours' ? '#F16B51' : 'black'
              }}
              onClick={() => handleNavigation('/Tours', 'Tours')}
            >
              Tours
            </button>
            <button
              style={{
                ...styles.link,
                borderBottom: activeLink === 'Add Tours' ? '2px solid #F16B51' : 'none',
                color: activeLink === 'Add Tours' ? '#F16B51' : 'black'
              }}
              onClick={() => handleNavigation('/Addtours', 'Add Tours')}
            >
              Add Tours
            </button>
            <button
              style={{
                ...styles.link,
                borderBottom: activeLink === 'My Tours' ? '2px solid #F16B51' : 'none',
                color: activeLink === 'My Tours' ? '#F16B51' : 'black'
              }}
              onClick={() => handleNavigation('/Mytours', 'My Tours')}
            >
              My Tours
            </button>
          </div>
        </div>
      </header>
      
      <main style={styles.mainContainer}>
        <h1 style={styles.heading}>Top Destinations At {locationName}</h1>
        <img src="/notfound.svg" alt="Not Found" style={styles.svg} />
        <p style={styles.message}>Sorry, we didn't find any tours right now at {locationName}</p>
      </main>
    </>
  );
};

type CustomStyles = {
  header: React.CSSProperties;
  leftContainer: React.CSSProperties;
  linksContainer: React.CSSProperties;
  links: React.CSSProperties;
  link: React.CSSProperties;
  logo: React.CSSProperties;
  mainContainer: React.CSSProperties;
  heading: React.CSSProperties;
  svg: React.CSSProperties;
  message: React.CSSProperties;
};

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
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
 
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
      
    
  
  svg: {
    width: '300px', 
    height: 'auto',
    marginBottom: '50px',
  },
  message: {
    fontSize: '18px',
    color: '#999',
    textAlign: 'center',
  },
};

export default Notfound;
