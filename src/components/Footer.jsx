import React from 'react';

function Footer() {
  return (
    <footer className="bg-black py-12 text-center flex flex-col justify-center items-center gap-4">
        <a href="https://www.facebook.com/feutechACM"><img src="/images/facebook-logo.png" alt="facebook logo" /></a>
      <div>
        <p>Copyright 2022 – FEUTECH ACM.</p>
        <p>
          Designed & Developed by{' '}
          <a href="https://github.com/Simperfy" className="underline">
            Simperfy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
