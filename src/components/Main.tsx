import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from 'antd';
import { useSelector } from 'react-redux';
import { selectLocations } from '../redux/locationSlice'; 

const { RangePicker } = DatePicker;

const locations = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
  'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Madrid', 'Miami', 'Lisbon',
  'Barcelona', 'Ankara', 'Orlando'
];

const Main: React.FC = () => {
  const navigate = useNavigate();
  const reduxLocations = useSelector(selectLocations);
  const [selectedPlaces, setSelectedPlaces] = useState<string>('');
  const [showPriceRanges, setShowPriceRanges] = useState<boolean>(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [hoveredPriceRange, setHoveredPriceRange] = useState<string | null>(null);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date[] | null>(null);

  const priceRanges = [
    '$50 - $200',
    '$200 - $400',
    '$400 - $500',
    '$500 - $750',
    '$750 - $1000',
    '$1000 and above',
  ];

  const handlePriceRangeClick = () => {
    setShowPriceRanges(prev => !prev);
  };

  const handlePriceRangeSelect = (range: string) => {
    setSelectedPriceRange(range);
    setShowPriceRanges(false);
  };

  const handleMouseEnter = (range: string) => {
    setHoveredPriceRange(range);
  };

  const handleMouseLeave = () => {
    setHoveredPriceRange(null);
  };

  const handleDateSelect = (dates: any) => {
    setSelectedDate(dates ? [dates[0].toDate(), dates[1].toDate()] : null);
    setCalendarOpen(false); 
  };

  const handleSearchClick = () => {
    const locationNames = reduxLocations.map(loc => loc.location.toLowerCase());
  
    if (locationNames.includes(selectedPlaces.toLowerCase())) {
      navigate(`/Tours/${selectedPlaces}`); // Pass selected place as URL parameter
    } else {
      navigate(`/notfound/${selectedPlaces}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.backgroundImage, backgroundImage: `url(${backgroundImageUrl})` }}>
        <header style={styles.header}>
          <div style={styles.leftContainer}>
            <img src="./Logo.png" alt="Tourbay Logo" style={styles.logo} />
          </div>
          <div style={styles.linksContainer}>
            <div style={styles.links}>
              <button style={styles.link} onClick={() => navigate('/Tours')}>Tours</button>
              <button style={styles.link} onClick={() => navigate('/Addtours')}>Add Tours</button>
              <button style={styles.link} onClick={() => navigate('/Mytours')}>My Tours</button>
            </div>
          </div>
        </header>
      </div>
      <main style={styles.main}>
        <div style={styles.rectangle}>
          <div style={styles.option}>
            <img src="./location.png" alt="Location Icon" style={styles.optionIcon} />
            <div style={styles.optionContainer}>
              Location
              <div style={styles.selectedValue}>{selectedPlaces}</div>
            </div>
          </div>
          <img src={"./line.svg"} alt="Line Separator" style={styles.line} />
          <div style={styles.option}>
            <img src="./calender.png" alt="Calendar Icon" style={{ ...styles.optionIcon, marginBottom: 5 }} />
            <div style={styles.optionContainer}>
              Choose Date
              {calendarOpen ? (
                <RangePicker
                  open={calendarOpen}
                  onOpenChange={(open) => setCalendarOpen(open)}
                  onChange={handleDateSelect}
                />
              ) : (
                <div
                  style={{
                    fontSize: 14,
                    color: selectedDate ? '#666' : '#ccc', 
                    marginTop: 5,
                    cursor: 'pointer',
                  }}
                  onClick={() => setCalendarOpen(true)}
                >
                  {selectedDate ? selectedDate[0].toLocaleDateString() + ' - ' + selectedDate[1].toLocaleDateString() : 'Choose here'}
                </div>
              )}
            </div>
          </div>
          <img src={"./line.svg"} alt="Line Separator" style={styles.line} />
          <div style={{ position: 'relative' }}>
            <div
              style={styles.option}
              onClick={handlePriceRangeClick}
            >
              <img src="./price.png" alt="Price Icon" style={styles.optionIcon} />
              <div style={styles.optionContainer}>
                Price Range
                <div style={styles.selectedValue}>{selectedPriceRange}</div>
              </div>
            </div>
            {showPriceRanges && (
              <div style={styles.priceRangeContainer}>
                {priceRanges.map((range, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.priceRangeOption,
                      backgroundColor: hoveredPriceRange === range ? '#F16B51' : '#fff',
                      color: hoveredPriceRange === range ? '#fff' : '#000',
                    }}
                    onClick={() => handlePriceRangeSelect(range)}
                    onMouseEnter={() => handleMouseEnter(range)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {range}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={handleSearchClick} style={styles.searchButton}>
            <img src={'./search.svg'} alt="Search Icon"/>
          </button>
        </div>
        <div style={styles.h2}>
          <h1>Popular Searches</h1>
        </div>
        <div style={styles.rectangle2}>
          {locations.map((place, index) => (
            <div
              key={index}
              style={styles.locationOption}
              onClick={() => setSelectedPlaces(place)}
            >
              {place}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const backgroundImageUrl = "https://s3-alpha-sig.figma.com/img/76a5/21a6/a93f3ac6f7ff1ae2667c07cce54658a2?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VZeuGJIaLdPZwLztwRpyxeibVmP6-fAZbxFHLTHDY-hroF-80EDT0nH6yRvyHw-Y8vLjv3HPkVpIw0ZtpH5Z9MgGx6Jmx4e-p-ZUdKwffONJZCHeHXHD34YoJF~QblzrItOKJ3Ocfp6250Qg9u3lBAD3O0johg0DaRJZa8SqGfJ8xDH71l2KCZ0E8QJ8c68NsRO0s140~1kIXBS-edm62A7Bc0C86ePbPeiZxUDfG1qTgixY3dz52lMJjk4nEXEU4Vp3hkDBQAdcqem5IsjRPlFiaX0aEseJXQe2KztFabkKXsKnbdVN27Sqp8GA1H46vE~-r1OPTZ55gjG6uuVamQ__";

type CustomStyles = {
  container: React.CSSProperties;
  backgroundImage: React.CSSProperties;
  header: React.CSSProperties;
  main: React.CSSProperties;
  rectangle: React.CSSProperties;
  option: React.CSSProperties;
  optionIcon: React.CSSProperties;
  priceRangeContainer: React.CSSProperties;
  priceRangeOption: React.CSSProperties;
  rectangle2: React.CSSProperties;
  locationOption: React.CSSProperties;
  leftContainer: React.CSSProperties;
  linksContainer: React.CSSProperties;
  links: React.CSSProperties;
  link: React.CSSProperties;
  logo: React.CSSProperties;
  line: React.CSSProperties;
  calendarContainer: React.CSSProperties;
  searchButton:React.CSSProperties;
  selectedValue:React.CSSProperties;
  optionContainer:React.CSSProperties;
  h2:React.CSSProperties;
};

const styles: CustomStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: 0,
    padding: 0,
    
  },
  backgroundImage: {
    position: 'relative',
    width: '100%',
    height: '572px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  header: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '25px',
    zIndex: 1,
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
    color: 'black',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'Poppins',
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
  rectangle: {
    position: 'absolute',
    width: '979px',
    height: '129px',
    top: '508px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '0 10px', 
  },
  rectangle2: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'Center',
    flexWrap: 'wrap',
    // borderRadius: '10px',
    backgroundColor: '#fff',
    // top: '800px',
    // height: '-198px',
    gap: '10px',
    padding: '60px 0px 0px 0px',
  },
  locationOption: {
     cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '12px',
  fontSize: '12px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E1E1E1',
  boxShadow: '0px 0px 0px 1px #E1E1E1, 0px 2px 4px rgba(0, 0, 0, 0.1)',
   

  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',
    fontSize: '16px',
    // marginTop: '-20px',
    marginRight:'40px'
  },
  optionIcon: {
    marginRight: '10px',
    width: '24px',
    height: '24px',
    verticalAlign: 'middle',
  },
  priceRangeContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '228px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    overflow: 'hidden',
  
    top: '88px', // Add this line
    marginLeft:'-30px'

  },
  priceRangeOption: {
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  line: {
    width: '2px', 
    height: '81px', 
    margin: '0 20px', 
  },
  calendarContainer: {
    // position: 'absolute',
    width: '250px',
    // backgroundColor: '#fff',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // borderRadius: '4px',
    // left: '50%',
    // transform: 'translateX(-50%)',
  },
  searchButton: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    position: 'absolute',
    top: '60%',
    left: 'calc(100% - 70px)', 
    transform: 'translateY(-50%)',
    zIndex: 10, // Ensure it's in front
  },
  selectedValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  optionContainer: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
},
h2:{
  position: 'absolute',
  top: '650px', 
  left: '50%',
  transform: 'translate(-50%, 0)',
  zIndex: 1, // ensure it's above the rectangles
},
};

export default Main;
