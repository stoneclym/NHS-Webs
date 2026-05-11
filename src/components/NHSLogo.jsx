const NHS_LOGO_URL = 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778541402/nhslogo_nyqsgs.png';

const NHSLogo = ({ size = 56, color = 'currentColor' }) => {
  const img = (
    <img
      src={NHS_LOGO_URL}
      alt="National Honor Society"
      style={{ width: size, height: size, objectFit: 'contain', display: 'block' }}
    />
  );

  if (color === 'white') {
    return (
      <div style={{
        background: 'white',
        borderRadius: 6,
        padding: 5,
        display: 'inline-flex',
        lineHeight: 0,
        flexShrink: 0,
      }}>
        {img}
      </div>
    );
  }

  return img;
};

export default NHSLogo;
