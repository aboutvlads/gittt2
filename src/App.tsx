import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DealsPage } from './pages/DealsPage';
import { DealPage } from './pages/DealPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DealsPage />} />
          <Route path="/deal/:id" element={<DealPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}