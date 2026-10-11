import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Header title="My Profile" />
      
      <main className="flex justify-center items-center p-6">
        <ProfileCard 
          name="Akhmet Sultan" 
          role="IT Management Student" 
        />
      </main>

      <Footer year="2026" />
    </div>
  );
}