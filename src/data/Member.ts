import type { Member } from '../types/member'

export const members: Member[] = [
  {
    id: 1,
    name: 'Politeknik Negeri Batam',
    shortName: 'POLIBATAM',
    location: 'Batam',
    region: 'Kepulauan Riau',
    type: 'campus',
    status: 'Kampus Anggota',
    logo: '/images/kampus/polibatam.svg',
    description:
      'Perguruan tinggi vokasi negeri yang berada di Kota Batam dan menjadi bagian dari jejaring FKMPI Riau Kepri.',
    website: 'https://www.polibatam.ac.id',
  },

  {
    id: 2,
    name: 'Politeknik Caltex Riau',
    shortName: 'PCR',
    location: 'Pekanbaru',
    region: 'Riau',
    type: 'campus',
    status: 'Kampus Anggota',
    logo: '/images/kampus/pcr.svg',
    description:
      'Perguruan tinggi vokasi yang berada di Kota Pekanbaru, Provinsi Riau.',
    website: 'https://www.pcr.ac.id',
  },

  {
    id: 3,
    name: 'Politeknik Negeri Bengkalis',
    shortName: 'POLBENG',
    location: 'Bengkalis',
    region: 'Riau',
    type: 'campus',
    status: 'Kampus Anggota',
    logo: '/images/kampus/polbeng.svg',
    description:
      'Perguruan tinggi vokasi negeri yang berada di Kabupaten Bengkalis dan menjadi bagian dari jejaring FKMPI.',
    website: 'https://www.polbeng.ac.id',
  },

  {
    id: 4,
    name: 'Politeknik Negeri Padang',
    shortName: 'PNP',
    location: 'Padang',
    region: 'Riau',
    type: 'campus',
    status: 'Kampus Anggota',
    logo: '/images/kampus/pnp.svg',
    description:
      'Data contoh untuk kebutuhan pengembangan direktori FKMPI.',
    website: '#',
  },

  {
    id: 5,
    name: 'Koordinator Regional FKMPI Riau Kepri',
    shortName: 'FKMPI RIAU KEPRI',
    location: 'Riau & Kepulauan Riau',
    region: 'Riau',
    type: 'regional',
    status: 'Pengurus Regional',
    role: 'Koordinator Regional',
    description:
      'Pengurus regional yang berperan dalam mengoordinasikan komunikasi dan kolaborasi antar anggota FKMPI.',
  },

  {
    id: 6,
    name: 'Koordinator Daerah Kepulauan Riau',
    shortName: 'KORDA KEPRI',
    location: 'Batam',
    region: 'Kepulauan Riau',
    type: 'regional',
    status: 'Pengurus Regional',
    role: 'Koordinator Daerah',
    description:
      'Koordinator daerah yang membantu membangun jejaring mahasiswa politeknik di wilayah Kepulauan Riau.',
  },
]