import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './Router/Router';
import { Toaster } from "react-hot-toast";   // ✅ Import Toaster

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Toaster টা root level এ বসাও */}
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  </StrictMode>,
)
