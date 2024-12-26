import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export const links = [
  { name: "Главная", href: "/dashboard", icon: HomeIcon },
  {
    name: "Счета",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Клиенты", href: "/dashboard/customers", icon: UserGroupIcon },
];
