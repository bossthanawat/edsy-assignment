import { Button } from "@/components/ui/button";
import Paper from "@/components/ui/paper";
import MultipleChoice from "@/assets/Multiple choice.svg?react";
import { NavLink } from "react-router-dom";
import { PATH_PAGE } from "@/router/path";

const Home = () => {
  return (
    <>
      <div className="container">
        <Paper className="mt-12 w-[1040px] h-[700px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-14 h-full">
            <p className="text-3xl font-semibold">General English Test</p>
            <div className="flex gap-5">
              <div className="bg-primary-50 rounded-lg w-[185px] px-[30px] py-3">
                <p className="text-xs">Total questions</p>
                <p className="font-bold mt-2">10 questions</p>
              </div>
              <div className="bg-primary-50 rounded-lg w-[185px] px-[30px] py-3">
                <p className="text-xs">Test duration</p>
                <p className="font-bold mt-2">5:00 min</p>
              </div>
            </div>
            <MultipleChoice />
            <NavLink to={PATH_PAGE.question}>
              <Button>Start the test</Button>
            </NavLink>
          </div>
        </Paper>
      </div>
    </>
  );
};
export default Home;
