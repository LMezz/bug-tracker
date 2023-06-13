import {
  AiOutlineAccountBook,
  AiOutlineBell,
  AiOutlineMail,
} from "react-icons/ai"
import { BiPaint } from "react-icons/bi"
import { BsPerson, BsShieldCheck } from "react-icons/bs"

const settingsPages = [
  {
    name: "General",
    pages: [
      {
        name: "Profile",
        path: "/settings/profile",
        icon: <BsPerson />,
      },
      {
        name: "Account",
        path: "/settings/account",
        icon: <AiOutlineAccountBook />,
      },
      {
        name: "Appearance",
        path: "/settings/appearance",
        icon: <BiPaint />,
      },
      {
        name: "Notifications",
        path: "/settings/notifications",
        icon: <AiOutlineBell />,
      },
    ],
  },
  {
    name: "Access",
    pages: [
      {
        name: "Emails",
        path: "/settings/emails",
        icon: <AiOutlineMail />,
      },
      {
        name: "Password and Authentication",
        path: "/settings/security",
        icon: <BsShieldCheck />,
      },
    ],
  },
]

export default settingsPages
