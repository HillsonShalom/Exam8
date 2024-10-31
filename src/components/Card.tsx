import apiContext from "../service/apiContext";
import { Mission } from "../types/MissionModel";

interface Props {
  mission: Mission;
  set: (x: () => Promise<Mission>) => void;
  del: (x: () => Promise<Mission>) => void;
}

const Card = ({ mission, set, del }: Props) => {
  const progress = () => {
    set(async () => {
      await apiContext.updateStatus(mission._id);
      return mission;
      
    });
  };

  const deleteById = () => {
    del(async () => {
        await apiContext.deleteById(mission._id);
        return mission;
    })
  };
  return (
    <div>
      <h3>{mission.name}</h3>
      <p>{mission.status}</p>
      <p>{mission.priority}</p>
      <p>{mission.description}</p>
      <button onClick={deleteById}>Delete</button>
      <button onClick={progress}>Progress</button>
    </div>
  );
};

export default Card;
