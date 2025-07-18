'use client'

import { useEffect } from 'react'

export default function OnboardingFormPage() {
  useEffect(() => {
    // Load Jotform script only on the client side
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://form.jotform.com/jsform/251874915543061'
    script.async = true
    
    const container = document.querySelector('.jotform-container')
    if (container) {
      container.appendChild(script)
    }

    // Add responsive CSS for Jotform after script loads
    script.onload = () => {
      const style = document.createElement('style')
      style.textContent = `
        .jotform-container iframe,
        .jotform-container form {
          width: 100% !important;
          max-width: 100% !important;
        }
        .jotform-container .form-all {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .jotform-container .form-line {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .jotform-container input[type="text"],
        .jotform-container input[type="email"],
        .jotform-container textarea,
        .jotform-container select {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        @media (max-width: 768px) {
          .jotform-container .form-line {
            padding: 8px 4px !important;
          }
          .jotform-container .form-input {
            width: 100% !important;
          }
        }
      `
      document.head.appendChild(style)
    }
    
    // Cleanup function
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script)
      }
    }
  }, [])

  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="bg-card rounded-lg border shadow-sm p-2 md:p-6">
            {/* Jotform Embed Container */}
            <div className="jotform-container w-full overflow-hidden" style={{ minHeight: "600px" }}>
              {/* Jotform script will inject content here */}
            </div>

            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 px-4 md:px-0">
              <p>
                If you have any questions or encounter any issues with this form, please contact us {" "}
                <a href="mailto:admin@nortonapplications.com" className="text-primary hover:underline">
                  here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}