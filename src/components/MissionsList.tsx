import { useEffect } from "react";
import Card from "./Card";
import { Mission } from "../types/MissionModel";
import apiContext from "../service/apiContext";

interface Props {
  missions: Mission[];
  setMissions: (x: Mission[]) => void;
}

const MissionsList = ({ missions, setMissions }: Props) => {
  useEffect(() => {
    apiContext.getAll().then((d) => {
      setMissions(d);
    });
  }); // remove
  return (
    <div>
      {missions.map((m) => (
        <Card
          mission={m}
          key={m._id}
          set={(x) => {
            x().then((d) =>
              setMissions([...missions.filter((m) => m._id !== d._id), d])
            );
          }}
          del={(x) => {
            x().then(d => setMissions([...missions.filter((m) => m._id !== d._id)]))
          }}
        />
      ))}
    </div>
  );
};

export default MissionsList;
