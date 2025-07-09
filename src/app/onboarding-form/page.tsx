export default function OnboardingFormPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Onboarding Form</h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Please complete the form below to help us understand your automation needs.
            </p>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            {/* Jotform Embed Container */}
            <div className="jotform-container" style={{ minHeight: "600px" }}>
              {/* 
                To embed a Jotform, you would typically add a script tag or iframe here.
                For example:
                
                <iframe
                  id="JotFormIFrame"
                  title="Client Onboarding Form"
                  src="https://form.jotform.com/your-form-id"
                  style={{ width: "100%", height: "100vh", border: "none" }}
                  allowFullScreen
                />
                
                Replace "your-form-id" with your actual Jotform ID.
                You can also adjust the styling as needed.
              */}
              <div className="flex items-center justify-center h-[600px] bg-muted/50 rounded-md">
                <p className="text-muted-foreground text-center">
                  Jotform will be embedded here.
                  <br />
                  Replace this placeholder with your Jotform embed code.
                </p>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              <p>
                If you have any questions or encounter any issues with this form, please contact us at{" "}
                <a href="mailto:support@automateai.com" className="text-primary hover:underline">
                  support@automateai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
