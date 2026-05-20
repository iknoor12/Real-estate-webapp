import LegalPage from './LegalPage'

function FAQ() {
  return (
    <LegalPage title="FAQs">
      <h2>Is this a real rental service?</h2>
      <p>No — this is a front-end demo with placeholder data for learning and presentation.</p>
      <h2>Do listings update in real time?</h2>
      <p>No backend is connected; all content is static sample data.</p>
      <h2>Where is my wishlist stored?</h2>
      <p>Only in your browser (localStorage). Clearing site data will remove it.</p>
    </LegalPage>
  )
}

export default FAQ
