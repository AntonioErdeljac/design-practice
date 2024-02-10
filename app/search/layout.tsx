import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const SearchPageLayout = ({ children }: Props) => {
  return ( 
    <div className="h-full">
      <Header />
      {children}
    </div>
  );
};
 
export default SearchPageLayout;
