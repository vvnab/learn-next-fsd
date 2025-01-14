"use client";

import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

/**
* Компонент поиска.
* @param {Object} props - Свойства компонента.
* @param {string} props.placeholder - Текст-заполнитель для поля ввода.
*/
export default function Search({ placeholder }: { placeholder: string }) {
 const searchParams = useSearchParams();
 const pathname = usePathname();
 const { replace } = useRouter();
 const inputRef = useRef<HTMLInputElement>(null);

 /**
  * Обработчик поиска с задержкой.
  * @param {string} term - Термин поиска.
  */
 const handleSearch = useDebouncedCallback((term: string) => {
   const params = new URLSearchParams(searchParams || "");
   params.set("page", "1");
   if (term) {
     params.set("query", term);
   } else {
     params.delete("query");
   }
   replace(`${pathname}?${params.toString()}`);
 }, 300);

 /**
  * Обработчик очистки поиска.
  */
 const handleClear = () => {
   const params = new URLSearchParams(searchParams || "");
   params.set("page", "1");
   params.delete("query");
   replace(`${pathname}?${params.toString()}`);
   if (inputRef.current?.value) inputRef.current.value = "";
 };

 return (
   <div className="relative flex flex-1 flex-shrink-0">
     <label htmlFor="search" className="sr-only">
       Search
     </label>
     <input
       className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
       placeholder={placeholder}
       onChange={(e) => {
         handleSearch(e.target.value);
       }}
       defaultValue={searchParams?.get("query")?.toString()}
       ref={inputRef}
     />
     <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
     <XMarkIcon
       className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900"
       onClick={handleClear}
     />
   </div>
 );
}
