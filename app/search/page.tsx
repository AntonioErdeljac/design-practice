import { Filters } from "@/components/filter";
import { Results } from "@/components/results";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Dot = ({ className }: any) => {
  return (
    <div className={cn("absolute", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <div className="space-y-2 cursor-pointer hover:opacity-75 drop-shadow-md">
              <div className="bg-slate-500/50 p-1 rounded-xl text-white text-sm text-center">
                $300
              </div>
              <div className=" bg-slate-500/50 h-12 w-12 rounded-full flex flex-col items-center justify-between p-4">
                <div className="h-full w-full bg-white rounded-full" />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            More details
          </PopoverContent>
      </Popover>
    </div>
  );
};

const SearchPage = () => {
  return ( 
    <div className="h-[calc(100%-64px)] grid grid-cols-5 p-6  max-w-screen-xl mx-auto gap-4">
      <div className="h-full col-span-3 space-y-4">
        <Filters />
        <Results />
      </div>
      <div className="h-full bg-blue-500 col-span-2 rounded-xl relative overflow-hidden">
        <Image
          fill
          alt=""
          src="/map.jpg"
          className="object-cover"
        />
        <Dot className="top-[30vh] left-[30vh]" />
        <Dot className="top-[20vh] left-[10vh]" />
        <Dot className="top-[10vh] right-[10vh]" />
      </div>
    </div>
  );
}
 
export default SearchPage;