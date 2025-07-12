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
          {/* <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Onboarding Form</h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Please complete the form below to help us understand your automation needs.
            </p>
          </div> */}

          <div className="bg-card rounded-lg border shadow-sm p-6">
            {/* Jotform Embed Container */}
            <div className="jotform-container" style={{ minHeight: "600px" }}>
              {/* Jotform script will inject content here */}
            </div>

            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
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
