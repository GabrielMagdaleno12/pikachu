import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
  title: 'LifeStyle',
  description: 'Transforme seu estilo de vida da melhor forma',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
