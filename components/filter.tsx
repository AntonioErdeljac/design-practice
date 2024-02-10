import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FilterButton = ({ children, active }: any) => {
  return (
    <button
      className={cn(
        "p-2 px-3 rounded-xl text-muted-foreground",
        active && "bg-sky-500/40 text-neutral-800"
      )}
    >
      {children}
    </button>
  );
};

const FilterInput = ({ 
  label, 
  placeholder,
  className,
}: any) => {
  return (
    <div className="space-y-1 w-full">
      <p className="text-[12px] text-muted-foreground">
        {label}
      </p>
      <Input 
        placeholder={placeholder}
        className={cn(
          "border-0 border-r",
          className,
        )}
      />
    </div>
  );
};

export const Filters = () => {
  return (
    <div className="bg-[#F4F6F9] rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <FilterButton active>
            Hotel
          </FilterButton>
          <FilterButton>
            House
          </FilterButton>
          <FilterButton>
            Village
          </FilterButton>
        </div>
        <p className="text-muted-foreground text-sm">
          Today: Oct 10, Tue
        </p>
      </div>
      <div className="flex drop-shadow-2xl items-end w-full">
        <FilterInput
          label="City or hotel"
          placeholder="Search"
          className="rounded-l-xl rounded-r-none"
        />
        <FilterInput
          label="Street or Address"
          placeholder="Search"
          className="rounded-l-none rounded-r-none"
        />
        <FilterInput
          label="Story or House"
          placeholder="Search"
          className="rounded-l-none rounded-r-none"
        />
        <Button className="rounded-l-none w-full">
          Search
        </Button>
      </div>
    </div>
  );
};
