import { TFullUser } from "./auth.type";
import { TRoom } from "./room.type";
import { TSlot } from "./slot.type";

export type TMyBooking = {
  _id: string;
  room: TRoom;
  slots: TSlot[];
  user: TFullUser;
  date: string;
  isConfirmed: string;
  totalAmount: number;
  isDeleted: boolean;
  transactionId:string;
  isPaid:string;
  __v: number;

};
