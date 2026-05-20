import LegalPage from './LegalPage'

function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This demo application may use your browser&apos;s <strong>local storage</strong> only to save
        items you add to the wishlist. We do not run a backend or collect personal data on our servers
        from this demo.
      </p>
      <h2>Information you may provide</h2>
      <p>
        If you use the email signup form, it only shows a confirmation message in the browser. No email
        is transmitted or stored by Luxe Bangalore in this demo build.
      </p>
      <h2>Cookies & analytics</h2>
      <p>
        This demo does not include third-party analytics cookies. External images (e.g. from Unsplash)
        may load according to those providers&apos; policies.
      </p>
      <h2>Contact</h2>
      <p>
        For real product inquiries, replace this text with your company contact details.
      </p>
    </LegalPage>
  )
}

export default Privacy
