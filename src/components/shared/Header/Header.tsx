import Link from 'next/link'

export function Header() {

  return (
    <header>
      <h1>Header</h1>
      <header>
          <nav>
            <ul>
              <Link href={'/'} >
                <li>Home</li>
              </Link>
              <Link href={'/store'} >
                <li>Store</li>
              </Link>
            </ul>
          </nav>
        </header>
    </header>
  );

}