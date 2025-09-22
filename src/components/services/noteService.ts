import axios from "axios";
import type { Note } from "../types/note";

const API_URL = "https://notehub-public.goit.study/api/notes";
const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>(API_URL, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    params,
  });
  return response.data;
};

export const createNote = async (note: Partial<Note>): Promise<Note> => {
  const response = await axios.post<Note>(API_URL, note, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axios.delete<Note>(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return response.data;
};
