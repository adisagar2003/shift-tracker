import SignOutBtn from '@/components/signOutButton'
import { Link } from '@nextui-org/react'
import { ChevronLeft } from 'lucide-react'

const Dashboard = ({
  children,
  allShifts,
}: {
  children: React.ReactNode
  allShifts: React.ReactNode
}) => {
  return (
    <div className="flex flex-col gap-8 w-full h-full max-w-[550px] mx-auto">
      <Link href="/">
        <ChevronLeft /> Home
      </Link>
      <div className="w-full ">{children}</div>
      <div className="w-full border-r border-default-50">{allShifts}</div>
      <SignOutBtn />
    </div>
  )
}
export default Dashboard
