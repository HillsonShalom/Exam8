export interface CreateMissionDto {
    name: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    priority: string;
    description: string;
}