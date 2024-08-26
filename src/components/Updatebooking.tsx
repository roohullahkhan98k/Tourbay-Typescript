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
   <div>
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
    <main>
     <div style={styles.container}>
     <div style={styles.leftDiv}>
       <h1 style={styles.heading}>Update Your Booking</h1>
       <form style={styles.form}>
         <div style={styles.formGroup}>
           <label style={styles.label} htmlFor="name">Name</label>
           <input style={styles.input} type="text" id="name" name="name" required />
         </div>
         <div style={styles.formGroup}>
           <label style={styles.label} htmlFor="email">Email</label>
           <input style={styles.input} type="email" id="email" name="email" required />
         </div>
         <div style={styles.formGroup}>
           <label style={styles.label} htmlFor="phone">Phone Number</label>
           <input style={styles.input} type="tel" id="phone" name="phone" required />
         </div>
         <div style={styles.formGroup}>
         <div style={{ display:'flex'}}>
  <div style={{ width: '50%', marginRight: '20px' }}>
    <label style={styles.label}>Number of Adults</label>
    <input style={styles.input} type="number" id="adults" name="adults" required />
  </div>
  <div style={{ width: '50%' }}>
    <label style={styles.label}>Number of Children</label>
    <input style={styles.input} type="number" id="children" name="children" required />
  </div>
</div>
</div>
         <div style={styles.paymentMethod}>
           <label style={styles.label}>Payment Method</label>
           <select style={styles.select}>
             <option value="credit-card">Credit Card</option>
             <option value="paypal">PayPal</option>
             <option value="bank-transfer">Bank Transfer</option>
           </select>
         </div>
         <button type="submit" style={styles.button}>Update</button>
       </form>
     </div>
     <div style={styles.rightDiv}>
       <img src="/confirm.png" alt="Booking" style={styles.image} />
     </div>
   </div></main>
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
  container:React.CSSProperties;
  leftDiv:React.CSSProperties;
  rightDiv:React.CSSProperties;
  heading:React.CSSProperties;
  image:React.CSSProperties;
  form:React.CSSProperties;
  formGroup:React.CSSProperties;
  label:React.CSSProperties;
  input:React.CSSProperties;
  paymentMethod:React.CSSProperties;
  select:React.CSSProperties;
  button:React.CSSProperties;

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
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // maxWidth: '1500px',
    margin: '0 auto',
    marginTop:'120px'
  },
  leftDiv: {
    width: '800px',
    height: '835px',
    display: 'flex',
    flexDirection: 'column',
    // padding: '20px',
    boxSizing: 'border-box',
    // border: '1px solid #ddd',
    marginLeft:'175px'
  },
  rightDiv: {
    width: '818px',
    height: '835px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid #ddd',
    marginLeft:'180px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heading: {
    fontSize: '40px',
  fontFamily:'poppins',
  marginBottom:'20px',

  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  input: {
    padding: '15px',
    fontSize: '18px',
    border: '1px solid #ddd',
    borderRadius: '10px'
  },
  paymentMethod: {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    marginTop: '20px',
    padding: '20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#F16B51',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
  },
};

export default Tours;
