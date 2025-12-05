import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {
  return (
    <div className="max-w-full mx-auto">
      <nav className="">
        <Navbar></Navbar>
      </nav>

      <main className="flex-grow max-w-full mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
