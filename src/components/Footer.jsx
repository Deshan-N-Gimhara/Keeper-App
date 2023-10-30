import React from 'react';

const Footer = () => {
    const date = new Date();
  return (
    <footer>
        <div>
            <p>Copyright ⓒ {date.getFullYear()}.</p>
      </div>
    </footer>
  )
}

export default Footer
