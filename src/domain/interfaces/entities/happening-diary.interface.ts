import { FeelingJournal } from '@domain/interfaces/entities/feeling-journal.interface';
import { FeelingType } from '@domain/types';

export interface HappeningDiary {
  id: number;
  feelingJournalId: number;
  description: string;
  howIFelt: FeelingType;
  feelingJournal: FeelingJournal;
}
