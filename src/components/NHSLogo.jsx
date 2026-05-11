const NHS_LOGO_URL = 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778541402/nhslogo_nyqsgs.png';
const NHS_LOGO_WHITE_URL = 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778542780/nhslogowhite_m8e8zo.png';

const NHSLogo = ({ size = 56, color = 'currentColor' }) => (
  <img
    src={color === 'white' ? NHS_LOGO_WHITE_URL : NHS_LOGO_URL}
    alt="National Honor Society"
    style={{ width: size, height: size, objectFit: 'contain', display: 'block' }}
  />
);

export default NHSLogo;
