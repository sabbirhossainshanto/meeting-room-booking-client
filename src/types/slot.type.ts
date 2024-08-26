import { TRoom } from "./room.type";

export interface TSlot {
  _id: string;
  room: TRoom;
  date: string;
  isBooked: boolean;
  startTime: string;
  endTime: string;
}
