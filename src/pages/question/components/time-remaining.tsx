import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

const TimeRemaining = ({ duration }: { duration: number }) => {
  const [time, setTime] = useState(duration);
  const [isTimeUp, setIsTimeUp] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setIsTimeUp(true);
      window.alert("Time's up!");
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeStr = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <div
      className={cn(
        "bg-primary-50 rounded-[16px] text-primary-500 font-bold px-6 py-1",
        isTimeUp && "bg-red-50 text-red-500"
      )}
    >
      <div className="flex gap-1 items-center">
        <Icon icon={"material-symbols:alarm-outline"} className="text-2xl" />
        {isTimeUp ? "Time's up!" : <span>Time Remaining: {timeStr}</span>}
      </div>
    </div>
  );
};

export default TimeRemaining;
