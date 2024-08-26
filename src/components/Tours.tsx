import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Card {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  location: string;
}

const Tours: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Tours');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [filteredTours, setFilteredTours] = useState<Card[]>([]);
  const navigate = useNavigate();
  const { locationName } = useParams<{ locationName: string }>();

  const handleNavigation = (path: string, link: string) => {
    setActiveLink(link);
    navigate(path);
  };

  const handleViewDetails = (id: string) => {
    navigate(`/viewdetails/${id}`);
  };

  // Get the locations from the Redux store
  const locations = useSelector((state: RootState) => state.locations.locations as Card[]);

  useEffect(() => {
    if (locationName) {
      const filtered = locations.filter((location) =>
        location.location.toLowerCase().includes(locationName.toLowerCase())
      );
      console.log('Filtered Tours:', filtered);
      setFilteredTours(filtered);
    } else {
      setFilteredTours(locations);
    }
  }, [locationName, locations]);

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
      <main style={styles.main}>
        <h1 style={styles.heading}>
          {locationName ? `Top Destinations At ${locationName}` : 'All Available Tours'}
        </h1>
        {filteredTours.length > 0 ? (
          filteredTours.map((card: Card) => (
            <div
              key={card.id}
              style={styles.card}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={card.image} alt={card.title} style={styles.image} />
              <h2 style={{ marginLeft: '20px' }}>{card.title}</h2>
              <p style={styles.text}>{card.description}</p>
              <div style={styles.iconRow}>
                {hoveredCard === card.id ? (
                  <button
                    style={styles.detailsButton}
                    onClick={() => handleViewDetails(card.id)}
                  >
                    View Details
                  </button>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faDollarSign} style={styles.icon} />
                    <span style={styles.iconText}>{card.price}</span>
                    <FontAwesomeIcon icon={faClock} style={styles.icon} />
                    <span style={styles.iconText}>{card.duration}</span>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No tours available for the selected location.</p>
        )}
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
  main: React.CSSProperties;
  card: React.CSSProperties;
  image: React.CSSProperties;
  text: React.CSSProperties;
  iconRow: React.CSSProperties;
  icon: React.CSSProperties;
  iconText: React.CSSProperties;
  detailsButton: React.CSSProperties; 
  heading: React.CSSProperties; 
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
  main: {
    maxWidth: '1500px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    margin: '0 auto',
    marginTop: '260px',
    background: '#FFFFFF',
    marginLeft: '180px'
  },
  card: {
    width: '440px',
    textAlign: 'left',
    height: '388px',
    boxShadow: '0 1px 0px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    marginBottom: '50px',
    cursor: 'pointer',
    background: 'rgba(159, 164, 189, 0.01)',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: '10px'
  },
  image: {
    width: '100%',
    height: '225px',
    borderRadius: '10px 10px 0 0',
    objectFit: 'cover',
  },
  text: {
    margin: '5px 0',
    color: '#777',
    paddingLeft: '20px',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10px',
    paddingLeft: '10px',
  },
  icon: {
    margin: '0 5px',
    color: '#777',
  },
  iconText: {
    margin: '0 10px',
    color: '#777',
  },
  detailsButton: {
    width: '350px',
    backgroundColor: '#F16B51',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '10px',
    left: '45px',
  },
};

export default Tours;
