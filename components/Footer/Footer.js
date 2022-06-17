import Link from 'next/link'

export default function Footer() {
    return (
     <footer>
         <div className="footer-container">
            <div></div>
         <ul className="footer_links">
        {/* <li>
        <Link href="/" >
         <a>
             Legal
         </a>
         </Link>
         </li> 
         <li>
          <Link href="/">
         <a >
             Privacy
         </a>
         </Link> 
         <ul className='footer_sublink'>
            <li>
            <Link href="/" >
         <a>
             Privacy Policy
         </a>
         </Link>
            </li>
         <li>
         <Link href="/">
         <a >
             Cookie Policy
         </a>
         </Link>
         </li>
         <li>
         <Link href="/">
         <a >
             Terms of Condition
         </a>
         </Link>
         </li>
         </ul> 
         </li>*/}
         <li>
         <Link href="/sitemap">
         <a >
         Sitemap
         </a>
         </Link>
         </li>
         </ul>
         
        <div className="footer-trademark">
        <h1>
             Luau Data Corporation 2022	&copy; 
         </h1>
        </div>
        </div>
     </footer>
    );
  }
  