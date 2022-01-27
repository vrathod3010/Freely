export interface Trip {
  id: string
  name: string
  startDate: string
  endDate: string
  destinations: string[]
  status: 'NOT_STARTED' | 'FINISHED' | 'NOT_STARTED'
}
