import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import { NAV } from "@/lib/strings";

const Navbar = () => {
  return (
    <header>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex gap-5 justify-between items-center">
          <li className="grow">
            <Link href={ROUTES.home} className="text-3xl font-black">LOGO</Link>
          </li>
          <li>
            <Link href={ROUTES.games}>{NAV.games}</Link>
          </li>
          <li>
            <Button variant="outline" render={
              <Link href={ROUTES.login}>
                {NAV.login}
              </Link>
            } />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar