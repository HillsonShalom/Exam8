import { CreateMissionDto } from "../types/createMissionDto";
import { Mission } from "../types/MissionModel";

export default class {
  private static baseUrl = "https://reactexambackend.onrender.com/";
  private static apikey = "8755316";
  private static missionsRoute = "missions/";

  static getAll = async (): Promise<Mission[]> => {
    try {
      const missions: Mission[] = (await fetch(
        this.baseUrl + this.missionsRoute + this.apikey
      ).then((d) => d.json())) as Mission[];
      return missions;
    } catch (err) {
      const error = err as Error;
      throw error;
    }
  };

  static createMission = async (dto: CreateMissionDto): Promise<Mission> => {
    try {
      const res = await fetch(this.baseUrl + this.missionsRoute + this.apikey, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dto),
      });
      if (!res.ok) throw new Error("status code error");
      if (!res.body) throw new Error("return null");
      return await res.json() as Mission
    } catch (err) {
      const error = err as Error;
      throw error;
    }
  };

  static deleteById = async (id: string) => {
    try {
        const res = await fetch(this.baseUrl + this.missionsRoute + this.apikey + "/" + id, {
          method: "delete"
        });
        if (res.status > 299) throw new Error("status code error");
      } catch (err) {
        const error = err as Error;
        throw error;
      }
  }

  static updateStatus = async (id: string) => {
    try {
        const res = await fetch(this.baseUrl + this.missionsRoute + this.apikey + "/progress/" + id, {
          method: "post"
        });
        if (res.status > 299) throw new Error("status code error");
      } catch (err) {
        const error = err as Error;
        throw error;
      }
  }
}
