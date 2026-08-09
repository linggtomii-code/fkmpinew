export type MemberRegion = 'Riau' | 'Kepulauan Riau'
export type MemberType = 'campus' | 'regional'

export interface Member {
  id: number
  name: string
  shortName: string
  location: string
  region: MemberRegion
  type: MemberType
  status: string
  role?: string
  logo?: string
  description: string
  website?: string
}