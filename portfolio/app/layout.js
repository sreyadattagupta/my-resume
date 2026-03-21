import './globals.css';

export const metadata = {
  title: 'Sreya Datta Gupta | AI/ML Portfolio',
  description: 'Portfolio of Sreya Datta Gupta — AI/ML Engineer, Research Scientist, and Full-Stack Developer specializing in intelligent systems, genomics, and cloud-native solutions.',
  keywords: ['AI', 'ML', 'Portfolio', 'Sreya Datta Gupta', 'Machine Learning', 'Full Stack'],
  openGraph: {
    title: 'Sreya Datta Gupta | AI/ML Portfolio',
    description: 'Exploring the intersection of AI, research, and engineering.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
