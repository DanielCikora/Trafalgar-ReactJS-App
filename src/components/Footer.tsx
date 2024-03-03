import FooterBox from "./FooterBox/FooterBox";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='footer-logo'></div>
        <div className='footer-links'>
          <FooterBox />
        </div>
      </div>
    </footer>
  );
}
