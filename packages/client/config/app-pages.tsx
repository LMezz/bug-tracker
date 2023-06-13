import { AiFillCalendar, AiFillProject } from "react-icons/ai"
import { BsListTask } from "react-icons/bs"
import { FaBug, FaTh } from "react-icons/fa"
import { IoIosHelpBuoy } from "react-icons/io"
import { RiAdminFill } from "react-icons/ri"

const appPages = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaTh />,
  },
  {
    path: "/bug-tracker",
    name: "Bug Tracker",
    icon: <FaBug />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <AiFillProject />,
  },
  {
    path: "/tasks",
    name: "My Tasks",
    icon: <BsListTask />,
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: <AiFillCalendar />,
  },
  {
    path: "/help-center",
    name: "Help Center",
    icon: <IoIosHelpBuoy />,
  },
  {
    path: "/administration",
    name: "Administration",
    icon: <RiAdminFill className="fill-destructive" />,
  },
]

export default appPages
