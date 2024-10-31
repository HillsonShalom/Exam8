import { CreateMissionDto } from "../types/createMissionDto"
import apiContext from "./apiContext"

const postTest = async () => {
    const mission: CreateMissionDto = {
        name: "shalom",
        status: "Pending",
        priority: "High",
         description: "nothing"
    }
    const res = await apiContext.createMission(mission)
    console.log(res);
}

postTest()