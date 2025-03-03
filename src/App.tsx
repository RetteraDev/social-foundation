import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import DirectorInfo from './components/DirectorInfo';
import DocumentInfo from './components/DocumentInfo';
import NewsList from './components/NewsList';


import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="container my-4">
        <Banner />
        <DirectorInfo />
        <NewsList />
        <DocumentInfo />
        <ContactInfo />
      </div>
    </div>
  );
};

export default App;
