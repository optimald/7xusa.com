export default function SponsorLogos() {
  return (
    <div className="dashboard-logo-wrap header-sponsors">
      <div className="dashboard-logo">
        <a href="https://7xusa.com/sponsors/carta/">
          <img 
            width="320" 
            height="158" 
            src="/images/sponsors/carta.png" 
            className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
            alt="Carta" 
            decoding="async" 
            fetchPriority="high"
          />
        </a>
      </div>
      <div className="dashboard-logo">
        <a target="_blank" href="https://www.zendesk.com/company/events/?partner_contact=0031E00002VsuM7QAJ&partner_account=0011E00001pI95PQAS&utm_medium=partner_email&utm_source=7x">
          <img 
            width="624" 
            height="454" 
            src="/images/sponsors/zendesk.png" 
            className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
            alt="Zendesk" 
            decoding="async"
          />
        </a>
      </div>
    </div>
  )
} 