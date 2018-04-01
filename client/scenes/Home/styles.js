import homeBanner from '../../assets/images/gum_homebanner.jpg';

const styles = {
  headerArea: {
    width: '100%',
    margin: 0,
    minHeight: 550,
    padding: '0px 20px',
    background: `url(${homeBanner}) no-repeat top center`
  },
  topHeader: {
    margin: 0
  },
  countryBox: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    visibility: 'hidden'
  },
  titleBox: {
    textAlign: 'left'
  },
  title: {
    fontFamily: 'Barrio',
    fontSize: 48,
    lineHeight: 'normal',
    letterSpacing: 3.4,
    textAlign: 'center',
    color: '#ffffff'
  },
  publishBox: {
    alignSelf: 'flex-start',
    textAlign: 'right'
  },
  publishButton: {
    fontSize: '14px',
    fontWeight: 900,
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#4a90e2'
  }
};

export default styles;

