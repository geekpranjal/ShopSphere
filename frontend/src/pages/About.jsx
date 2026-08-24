import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    margin: '8px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '0.95rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease'
  };

  const techBadgeStyle = {
    display: 'inline-block',
    margin: '5px',
    padding: '6px 14px',
    background: 'rgba(249, 115, 22, 0.1)',
    color: '#f97316',
    borderRadius: '6px',
    fontSize: '0.85rem',
    border: '1px solid rgba(249, 115, 22, 0.3)'
  };

  return (
    <div style={containerStyle}>
      {/* Avatar */}
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #f97316, #ea580c)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        margin: '0 auto 24px auto',
        boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)',
        border: '3px solid rgba(249, 115, 22, 0.5)'
      }}>
        🌐
      </div>

      <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', color: '#fff' }}>About ShopSphere</h2>
      <h3 style={{ fontSize: '1.2rem', color: '#f97316', marginBottom: '20px', fontWeight: '500' }}>
        Built by <a href="https://github.com/geekpranjal" target="_blank" rel="noreferrer" style={{ color: '#f97316', textDecoration: 'none' }}>@geekpranjal</a>
      </h3>

      <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '650px', margin: '0 auto 30px auto' }}>
        ShopSphere is a full-stack MERN e-commerce platform built as a portfolio project to demonstrate
        modern web application development. It features a complete shopping experience with product
        management, user authentication, cart system, Razorpay payment integration, and a full admin dashboard.
      </p>

      {/* Tech Stack */}
      <div style={{ marginBottom: '35px' }}>
        <h4 style={{ color: '#71717a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Tech Stack</h4>
        <div>
          {['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT Auth', 'Razorpay', 'Cloudinary', 'Nodemailer'].map(tech => (
            <span key={tech} style={techBadgeStyle}>{tech}</span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '35px',
        textAlign: 'left'
      }}>
        {[
          { icon: '🛍️', title: 'Product Catalog', desc: 'Browse and filter products by category' },
          { icon: '🛒', title: 'Cart & Checkout', desc: 'Redux-powered persistent cart with Razorpay' },
          { icon: '👤', title: 'Auth System', desc: 'JWT-based login, register and profile' },
          { icon: '📦', title: 'Order Tracking', desc: 'View order history and status updates' },
          { icon: '🔧', title: 'Admin Dashboard', desc: 'Manage products, orders, and users' },
          { icon: '☁️', title: 'Cloud Storage', desc: 'Cloudinary for product image uploads' }
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{
            padding: '16px',
            background: '#09090b',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{icon}</div>
            <div style={{ color: '#fff', fontWeight: '600', marginBottom: '4px', fontSize: '0.95rem' }}>{title}</div>
            <div style={{ color: '#71717a', fontSize: '0.85rem' }}>{desc}</div>
          </div>
        ))}
      </div>

      {/* GitHub Link */}
      <div>
        <h4 style={{ color: '#71717a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Developer</h4>
        <a
          href="https://github.com/geekpranjal"
          target="_blank"
          rel="noreferrer"
          style={{ ...badgeStyle, background: 'rgba(249, 115, 22, 0.15)', borderColor: 'rgba(249, 115, 22, 0.4)', color: '#f97316', fontSize: '1rem', padding: '12px 28px' }}
        >
          <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          github.com/geekpranjal
        </a>
        <p style={{ color: '#52525b', fontSize: '0.85rem', marginTop: '16px' }}>
          {String.fromCharCode(169)} {new Date().getFullYear()} ShopSphere — A portfolio project by geekpranjal
        </p>
      </div>
    </div>
  );
};

export default About;
