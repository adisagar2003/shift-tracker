import { Navbar, NavbarBrand } from '@nextui-org/react'
import NextLogo from '@/assets/logo-full.png'
import Image from 'next/image'

export default function TopBar() {
  const menuItemsLoggedInUser = ['Dashboard', 'All Shifts', 'Log Out']
  const menuItems = ['SignIn', 'SignUp']

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Image
          src={NextLogo}
          alt="placeholder logo"
          className="max-h-10 w-auto"
        />
      </NavbarBrand>
    </Navbar>
  )
}
