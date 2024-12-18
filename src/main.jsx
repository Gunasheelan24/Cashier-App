import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Index from './Component/Index';
import Page from './Component/Page';
import PageOne from './Component/PageOne';
import PageThree from './Component/PageThree';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <Index /> */}
     {/* <Page /> */}
     {/* <PageOne /> */}
     <PageThree />
  </StrictMode>,
)
