import { CreateMissionDto } from "./createMissionDto";

export interface Mission extends CreateMissionDto {
    _id: string;
}