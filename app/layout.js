import dynamic from "next/dynamic";
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
// import AudioPlayer from './components/AudioPlayer';
import SwalPopup from './components/SwalPopup';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });
const ScrollToTopButton = dynamic(() => import("./ScrollToTop/ScrollToTopButton"), {
  ssr: false,
});
export const metadata = {
  title: 'VAMSI REDDY',
  description: 'This is the portfolio of Vamsi Reddy. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="title_logo1.ico"/>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          <SwalPopup />
          {children}
        </main>
        <Footer />
        {/* <AudioPlayer /> */}
        <ScrollToTopButton />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
