const NHS_LOGO_URL = 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778541402/nhslogo_nyqsgs.png';

const NHSLogo = ({ size = 56, color = 'currentColor' }) => (
  <img
    src={NHS_LOGO_URL}
    alt="National Honor Society"
    style={{
      width: size,
      height: size,
      objectFit: 'contain',
      display: 'block',
      filter: color === 'white' ? 'brightness(0) invert(1)' : 'none',
    }}
  />
);

export default NHSLogo;
