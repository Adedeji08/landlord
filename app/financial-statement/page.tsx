import SideNavBar from "@/component/common/SideNavBar";
import TopNavBar from "@/component/common/TopNavBar";
import ExpensesTable from "@/component/finanicals-ui/ExpensesTable";
 import ImageCard from "@/component/common/ImageCard";


const FinancialStatementPage = () => {
  return (
    <div className="min-h-screen flex">
      <nav className="bg-white w-80 flex flex-col gap-10 border-r border-slate-100 shadow-lg">
        <SideNavBar />
      </nav>
      <div className="right w-full flex gap-2 flex-col">
        <TopNavBar />
        <div className="bg-white shadow-2xl rounded-lg p-4 mx-5 my-10">
          <ImageCard />
          <ExpensesTable />
        </div>
        
      </div>
    </div>
  );
};

export default FinancialStatementPage;
