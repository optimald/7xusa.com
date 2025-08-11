import Link from 'next/link'

export default function Footer() {
  return (
    <div className="vvc-footer">
      <div className="vvc-footer-options">
        <ul>
          <li className="vvc-footer-menu cstm-first-li-footer">
            <Link href="/login" data-balloon="Invite a Friend" data-balloon-pos="right">
              <i className="fa fa-user-plus"></i>
              <span id="span-text">Invite a Friend</span>
            </Link>
          </li>

          <li className="vvc-footer-menu">
            <Link href="/login" data-balloon="7xTV" data-balloon-pos="right">
              <i className="fa fa-desktop desktop_7x"></i>
              <span id="span-text">7xTV</span>
            </Link>
          </li>

          <li className="vvc-footer-menu cst-highlight-footer">
            <Link className="cst-virtual-vvc-games-pp" href="/login" data-balloon="Virtual VC Game" data-balloon-pos="right">
              <i className="vc_logo"></i>
              <span id="span-text-vvcs">
                Virtual Venture Capitalist<br />
                PLAY THE GAME
              </span>
            </Link>
          </li>

          <li className="vvc-footer-menu">
            <Link href="/fantasy/my-history-entries/" data-balloon="vVC Leaderboard" data-balloon-pos="right">
              <i className="fa fa-medal"></i>
              <span id="span-text">vVC Leaderboard</span>
            </Link>
          </li>

          <li className="vvc-footer-menu">
            <Link href="/login" data-balloon="Learn from Pros" data-balloon-pos="right">
              <i className="fa fa-graduation-cap"></i>
              <span id="span-text">Learn from Pros</span>
            </Link>
          </li>

          <li className="vvc-footer-menu cstm-footers-menus">
            <Link href="/7xinformation/" data-balloon="Information FAQ" data-balloon-pos="right">
              <i className="fa fa-info"></i>
              <span id="span-text">Information FAQ</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
} 