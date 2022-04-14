import axios, { AxiosResponse } from "axios";
import { Cyclist } from "../models/cyclist";
import api from "./api";

interface DbCyclist {
  id: number,
  email: string,
  subscriptionId: string,
  name: string,
  cpf: string,
  birthDate: string,
  city?: string,
  state?: string,
  street: string,
  number: string,
  subscriptionConfirmation: boolean,
  hasReceivedKit: boolean
}

export function dbToModel(dbCyclist: DbCyclist): Cyclist {
  return {
    id: dbCyclist.id,
    email: dbCyclist.email,
    subscriptionId: dbCyclist.subscriptionId,
    name: dbCyclist.name,
    cpf: dbCyclist.cpf,
    birthDate: dbCyclist.birthDate,
    address: {
      city: dbCyclist.city,
      state: dbCyclist.state,
      street: dbCyclist.street,
      number: dbCyclist.number,
    },
    subscriptionConfirmation: dbCyclist.subscriptionConfirmation,
    hasReceivedKit: dbCyclist.hasReceivedKit
  }
}

export function modelToDb(cyclist: Cyclist): DbCyclist {
  return {
    id: cyclist.id,
    email: cyclist.email,
    subscriptionId: cyclist.subscriptionId,
    name: cyclist.name,
    cpf: cyclist.cpf,
    birthDate: cyclist.birthDate,
    city: cyclist.address.city,
    state: cyclist.address.state,
    street: cyclist.address.street,
    number: cyclist.address.number,
    subscriptionConfirmation: cyclist.subscriptionConfirmation,
    hasReceivedKit: cyclist.hasReceivedKit
  }
}

// export const findCyclists = async (page: number = PAGE_INIT, size: number = PAGE_SIZE, sort: ORDER = PAGE_SORT): Promise<Cyclist[]> => {
//   const response: AxiosResponse<Page<DbCyclist>> = await api.get<Page<DbCyclist>>(`cyclists?page=${page}&size=${size}&sort=${sort}`);

//   let newCyclists: Cyclist[] = []

//   for (let newAdmin of response.data.content) {
//     newCyclists.push(dbToModel(newAdmin))
//   }
//   return newCyclists
// }

// export const findCyclist = async (id: number): Promise<Cyclist | null> => {

//   if (id === null || id <= 0) {
//     throw new IndexException(id, "findCyclist", "CyclistService")
//   } else {

//     let cyclist: Cyclist = null;

//     const response: AxiosResponse<DbCyclist> = await api.get<DbCyclist>(`cyclists/${id}`);

//     if (response.status <= 300) {
//       cyclist = dbToModel(response.data)

//       cyclist.photo.localUrl = await getUrlFileFromServer(cyclist.photo.downloadUri)

//     }

//     return cyclist
//   }
// }

export const createCyclist = async (cyclist: Cyclist): Promise<Cyclist> => {

  let newCyclist: Cyclist = cyclist;
  const createCyclistForm = new FormData();

  let dbCyclist = modelToDb(newCyclist)

  console.log(dbCyclist)

  delete dbCyclist.id

  const response: AxiosResponse<DbCyclist> = await axios.post<DbCyclist>('https://passeiociclistico.getranmossoro.com.br/api/saveCadastro', createCyclistForm, {
    headers: {
      Accept: "application/json",
      "x-requested-with": "XmlHttpRequest",
    },
  })

  newCyclist = dbToModel(response.data)

  console.log(newCyclist)

  return newCyclist
}