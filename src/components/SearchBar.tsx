import Link from 'next/link'

export default function SearchBar() {

  return (
    <div className="vvc-header-bar">
      <form className="vvc-header-search">
        <input
          type="text"
          placeholder="Search startups..."
          className="vcc_search_input"
          defaultValue=""
        />
        <button 
          type="submit" 
          className="nouveau-search-submit ac_button search-startups"
          aria-label="Search"
        >
          <i className="fa fa-search" aria-hidden="true"></i>
          <span className="bp-screen-reader-text">Search</span>
        </button>
      </form>
      <div className="vvc-header-setting">
        <button className="ac_button filter_action" aria-label="Filters">
          <i className="fa fa-sliders-h"></i>
          <span className="bp-screen-reader-text">Filters</span>
        </button>
      </div>
      <div className="vvc-header-signup">
        <Link href="/login">Sign In</Link>
      </div>
    </div>
  )
} 