tailwind.config = {  
theme: {
  letterSpacing: {
    currentWide: ".0.005em;",
  },
  
  screens:{
    xs: '480px',
    sm:'640px',
    md:'768px',
    xm:'840px',
    lg:'1024px',
    xl:'1280px',
    xll:'1440px',
  },
  container: {
    padding: {
      DEFAULT: '0.5rem',
      xs:'10px',
      sm: '0.9rem',
      lg: '1rem',
      xl: '1.2rem'
    },
    center: 'true',
  },
  extend: {
    fontFamily: {
      boldText: ['Ubuntu-bold'],
    },
    fontFamily: {
      regularText: ['Ubuntu-regular'],
    },
    
  },
},
};
