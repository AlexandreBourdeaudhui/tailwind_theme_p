/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{tsx,ts,jsx,js}',
    './pages/**/*.{tsx,ts,jsx,js}',
  ],
  theme: {
    colors: {
      'white': 'var(--color-white)',
      'black': 'var(--color-black)',

      'primary': 'var(--primary-background)',
      'primary-hover': 'var(--primary-background-hover)',

      'success': 'var(--success-background)',
      'success-hover': 'var(--success-background-hover)',

      'info': 'var(--info-background)',
      'info-hover': 'var(--info-background-hover)',

      'warning': 'var(--warning-background)',
      'warning-hover': 'var(--warning-background-hover)',

      'danger': 'var(--danger-background)',
      'danger-hover': 'var(--danger-background-hover)',
    }
  },
  plugins: [],
};
