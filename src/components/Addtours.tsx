import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tours: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Add Tours');
  const navigate = useNavigate();

  const handleNavigation = (path: string, link: string) => {
    setActiveLink(link);
    navigate(path);
  };

  return (
    <header style={styles.header}>
      <div style={styles.leftContainer}>
        <img src="./Logo.png" alt="Tourbay Logo" style={styles.logo} />
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
  );
};

type CustomStyles = {
  header: React.CSSProperties;
  leftContainer: React.CSSProperties;
  linksContainer: React.CSSProperties;
  links: React.CSSProperties;
  link: React.CSSProperties;
  logo: React.CSSProperties;
};

const styles: CustomStyles = {
    header: {
        maxWidth:'1500px',
        display: 'flex',
        position: 'absolute',
        top: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '25px',
        zIndex: 1,
        marginLeft:'75px',
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
};

export default Tours;
