import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faClock,faTrash} from '@fortawesome/free-solid-svg-icons';

const Mytours: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('My Tours');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string, link: string) => {
    setActiveLink(link);        
    navigate(path);
  };

  const handleViewDetails = (id: string) => {
    navigate(`/viewdetails/${id}`); 
  };
  const handleDelete = (id: string) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      const remainingDays = calculateRemainingDays(card.duration);
      if (remainingDays <= 3) {
        
        const alertContainer = document.createElement('div');
        Object.assign(alertContainer.style, styles.alertContainer);
  
        
        alertContainer.innerHTML = `
          <div style="display: flex; flex-direction: column; height: 100%; padding: 20px;box-sizing: border-box;">
            <div style="display: flex; justify-content: flex-start; align-items: center;">
              <h2 style="color: #F16B51;">Delete Tour</h2>
            </div>
            <p style="flex-grow: 1; padding: 20px;">You can’t delete <b>${card.title}</b> because there are only <b>${remainingDays}</b> days remaining until the beginning of this tour.</p>
            <div style="display: flex; justify-content: flex-end; margin-top: -25px;">
              <button id="cancelButton" style="background-color: #F16B51; color: #fff; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer;">Cancel</button>
            </div>
          </div>
        `;
  
        // Append the alert container to the body
        document.body.appendChild(alertContainer);
  
        // Attach the event listener to the cancel button
        document.getElementById('cancelButton')?.addEventListener('click', () => {
          document.body.removeChild(alertContainer);
        });
  
        return;
      } else {
        // Create the confirmation alert container
        const confirmContainer = document.createElement('div');
        Object.assign(confirmContainer.style, styles.alertContainer);
  
        // Create the confirmation alert content
        confirmContainer.innerHTML = `
          <div style="display: flex; flex-direction: column; height: 100%; padding: 20px;box-sizing: border-box;">
            <div style="display: flex; justify-content: flex-start; align-items: center;">
              <h2 style="color: #F16B51;">Confirm Deletion</h2>
            </div>
            <p style="flex-grow: 1; padding: 20px;">Are you sure you want to delete <b>${card.title}</b>?</p>
            <div style="display: flex; justify-content: flex-end; margin-top: -25px;">
              <button id="confirmButton" style="background-color: #F16B51; color: #fff; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer;">Confirm</button>
              <button id="cancelButton" style="background-color: #F16B51; color: #fff; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer; margin-left: 10px;">Cancel</button>
            </div>
          </div>
        `;
  
        // Append the confirmation alert container to the body
        document.body.appendChild(confirmContainer);
  
        // Attach the event listeners to the confirm and cancel buttons
        document.getElementById('confirmButton')?.addEventListener('click', () => {
          console.log(`Tour with id ${id} deleted`);
          document.body.removeChild(confirmContainer);
        });
        document.getElementById('cancelButton')?.addEventListener('click', () => {
          document.body.removeChild(confirmContainer);
        });
      }
    }
  };

  const calculateRemainingDays = (duration: string) => {
    const days = parseInt(duration.split(' ')[0]);
 
    const startDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    const remainingDays = Math.ceil((startDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000));
    return remainingDays;
  };
  const handleUpdate = (id: string) => {
   
    navigate(`/update`);
  
    console.log(`Navigating to update tour with id ${id}`);
  };
  
  

 
  const cards = [
    { id: 'Pérez Art Museum Miami', image: './perez.png', title: ' Pérez Art Museum Miami', description: 'The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami and it is very .....', price: '$50-$200', duration: '3 days' },
    { id: 'Hard Rock Stadium', image: './hardrock.png', title: 'Hard Rock Stadium', description: 'Hard Rock Stadium is a multi-purpose stadiumlocated in Miami Gardens, Florida, a city of flower is located in the  .....', price: '$70-$250', duration: '2 days' },
    { id: 'Matheson Hammock', image: './metheson.png', title: 'Matheson Hammock', description: 'Matheson Hammock Park is a 630 acres urban park in metropolitan Miami at 9610 Old-fashoined park  .....', price: '$60-$220', duration: '4 days' },
    { id: 'The Wharf Miami', image: './wharf.png', title: 'The Wahrf Maimi', description: 'An all new outdoor pop-up event space anchored with live music, eats, cocktails and stuff like these .......', price: '$80-$270', duration: '5 days' },
    { id: 'Miami Tower', image: './tower.png', title: 'Miami Tower', description: 'The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami and it is very .....', price: '$90-$300', duration: '6 days' },
    { id: 'Skyviews Miami', image: './skyviews.png', title: 'Skyviews Miami', description: 'The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami and it is very .....', price: '$100-$320', duration: '7 days' },
  ];
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
      <main style={styles.main}>
          <h1 style={styles.heading}>My Tours</h1>
          {cards.map(card => (
            <div
              key={card.id}
              style={styles.card}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={card.image} alt={card.title} style={styles.image} />
              <h2 style={{ marginLeft: '20px' }}>{card.title}</h2>
              <p style={styles.text}>{card.description}</p>
              <div style={{
  ...styles.iconRow,
  display: hoveredCard === card.id ? 'flex' : 'flex',
  justifyContent: hoveredCard === card.id ? 'space-between' : 'flex-start',
  alignItems: 'center',
  marginBottom: '10px', 
}}>
  {hoveredCard === card.id ? (
    <>
      <FontAwesomeIcon icon={faTrash} color="#F16B51" size="lg" style={{ cursor: 'pointer', width: '5%', }} onClick={() => handleDelete(card.id)} />
      <button style={{
        backgroundColor: '#F16B51',
        border: 'none',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '40%',
        marginRight: '',
        
      }} onClick={() => handleViewDetails(card.id)}>Details</button>
      <button style={{
        backgroundColor: '#F16B51',
        border: 'none',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '40%',
        marginRight: '12px',
      }} onClick={() => handleUpdate(card.id)}>Update</button>
    </>
  ) : (
    <>
      <FontAwesomeIcon icon={faDollarSign} style={styles.icon} />
      <span style={styles.iconText}>{card.price}</span>
      <FontAwesomeIcon icon={faClock} style={styles.icon} />
      <span style={styles.iconText}>{card.duration}</span>
    </>
  )}
</div>    </div>
          ))}
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
  heading:React.CSSProperties; 
  deleteButton:React.CSSProperties; 
  alertContainer:React.CSSProperties;
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
  heading:{
    position: 'absolute',
    top: '130px',
    right:'690px',
    width: '100%',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#333',
    fontFamily:'poppins'
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
    maxWidth:'1500px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    alignItems:'center',
    margin: '0 auto',
    marginTop: '260px',
    background: '#FFFFFF',
    marginLeft:'180px'
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
    paddingBottom:'10px'
 },
  image: {
    width: '100%',
    height:'225px',
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

  },
  deleteButton: {
    
  },
  alertContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '656px',
    height: '224px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: 0,
    zIndex: 1,
  },
};


export default Mytours;
