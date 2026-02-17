import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import styles from './App.module.css';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div style={{ position: 'fixed', top: 0, right: 0, background: 'green', color: 'white', zIndex: 9999, padding: '5px', fontSize: '10px' }}>
        v1.3 - Final Grid
      </div>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <TopBar />
          <main className={styles.mainScroll}>
            <Dashboard />
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
