import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType } from "@/shared/types";

const benefits: BenefitType = [
    {
      icon: <HomeModernIcon className="w-6 h-6"/>,
      title: "State of the Art Facilities",
      description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="w-6 h-6"/>,
      title: "100's of Diverse Classes",
      description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6"/>,
      title: "Expert and Pro Trainers",
      description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]

export {benefits}